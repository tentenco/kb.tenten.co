from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote,urlsplit
from datetime import datetime,timezone
import hashlib
import importlib.util
import io
import json
import re
import sys
import tokenize

ROOT=Path(__file__).resolve().parents[1]
SITE=ROOT/'site'

class Scan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids=set()
        self.duplicates=[]
        self.refs=[]
        self.lang=None
        self.main=0
        self.h1=0
        self.noindex=False
        self.text=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if attrs.get('id'):
            if attrs['id'] in self.ids:self.duplicates.append(attrs['id'])
            self.ids.add(attrs['id'])
        if tag=='html':self.lang=attrs.get('lang')
        if tag=='main':self.main+=1
        if tag=='h1':self.h1+=1
        if tag=='meta' and attrs.get('name')=='robots':self.noindex='noindex' in attrs.get('content','')
        for key in ('href','src','action'):
            if attrs.get(key):self.refs.append((tag,attrs[key]))
    def handle_data(self,text):
        self.text.append(text)

def digest(paths):
    result=hashlib.sha256()
    for path in sorted(paths):
        result.update(str(path.relative_to(ROOT)).encode())
        result.update(path.read_bytes())
    return result.hexdigest()

def main():
    failures=[]
    checks=[]
    def check(name,condition,detail=''):
        checks.append(dict(name=name,passed=bool(condition),detail=detail))
        if not condition:failures.append(name+(': '+detail if detail else ''))
    spec=importlib.util.spec_from_file_location('kb_build',ROOT/'scripts/build.py')
    module=importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    data=module.read_content()
    try:
        books=module.validate(data)
        check('canonical schema and references',True)
    except (ValueError,KeyError,TypeError) as e:
        check('canonical schema and references',False,str(e))
        books={b['id']:b for b in data['books']}
    check('compact library',len(books)<=32 and len(data['categories'])==8,str(len(books))+' playbooks')
    for c in data['categories']:
        count=sum(b['category']==c['id'] for b in books.values())
        check('coverage: '+c['id'],count>=2,str(count)+' cards')
    pages={p.resolve():Scan() for p in SITE.rglob('*.html')}
    for p,scan in pages.items():scan.feed(p.read_text())
    for p,scan in pages.items():
        local=[]
        for tag,ref in scan.refs:
            url=urlsplit(ref)
            if url.scheme or url.netloc:
                if tag in ('script','img','link'):local.append('remote runtime asset '+ref)
                continue
            target=(p.parent/unquote(url.path)).resolve() if url.path else p
            if not target.is_relative_to(SITE.resolve()):local.append('path escape '+ref);continue
            if not target.is_file():local.append('missing '+ref);continue
            if url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:local.append('missing anchor '+ref)
        check('page: '+str(p.relative_to(SITE)),not local and not scan.duplicates and scan.lang=='zh-Hant' and scan.h1==1 and scan.main==1 and scan.noindex,'; '.join(local+scan.duplicates))
    expected_pages=6+len(books)+len(data['categories'])+len(data['scenarios'])
    check('expected routes',len(pages)==expected_pages,f'{len(pages)}/{expected_pages}')
    sources={s['id']:s for s in data['sources']}
    for ident,book in books.items():
        expected=module.markdown(book,sources)
        canonical=ROOT/'exports/playbooks'/f'{ident}.md'
        served=SITE/'files/playbooks'/f'{ident}.md'
        check('export: '+ident,canonical.is_file() and served.is_file() and canonical.read_text()==expected and served.read_text()==expected)
    for scenario in data['scenarios']:
        expected=module.packet(scenario['title'],scenario['ids'],books,sources,scenario)
        canonical=ROOT/'exports/scenarios'/f'{scenario["id"]}.md'
        served=SITE/'files/scenarios'/f'{scenario["id"]}.md'
        check('packet: '+scenario['id'],canonical.is_file() and served.is_file() and canonical.read_text()==expected and served.read_text()==expected)
    raw=(SITE/'assets/data.js').read_text()
    payload=json.loads(raw.removeprefix('window.TENTEN_KB=').strip().removesuffix(';'))
    check('browser corpus/export parity',len(payload['books'])==len(books) and all(b['markdown']==module.markdown(books[b['id']],sources) for b in payload['books']))
    check('bundle budget',len(raw.encode())<240000,str(len(raw.encode()))+' bytes; limit 240000')
    search_raw=(SITE/'assets/search-data.js').read_text()
    search_payload=json.loads(search_raw.removeprefix('window.TENTEN_SEARCH=').strip().removesuffix(';'))
    expected_search=[{k:v for k,v in book.items() if k!='markdown'} for book in payload['books']]
    check('search corpus parity without full markdown',search_payload['books']==expected_search)
    check('search payload budget',len(search_raw.encode())<70000,str(len(search_raw.encode()))+' bytes; limit 70000')
    packet_failures=[]
    for page in pages:
        html=page.read_text()
        route=page.relative_to(SITE).as_posix()
        match=re.search(r'<script type="application/json" id="packet-data">(.*?)</script>',html,re.S)
        expected_ids=None
        scenario=None
        if route.startswith('playbooks/'):expected_ids=[page.stem]
        if route.startswith('scenarios/'):
            scenario=payload['scenarios'][page.stem]
            expected_ids=scenario['ids']
        if expected_ids:
            packet_data=json.loads(match.group(1)) if match else {}
            expected_books=[dict(id=ident,markdown=module.markdown(books[ident],sources)) for ident in expected_ids]
            if packet_data!=dict(books=expected_books,scenario=scenario,contract=module.CONTRACT):packet_failures.append(route)
        elif match:packet_failures.append(route)
    check('page-local packet scope and export parity',not packet_failures,','.join(packet_failures))
    check('pages exclude full corpus runtime',all(not any(tag=='script' and ref.endswith('/data.js') for tag,ref in scan.refs) for scan in pages.values()))
    check('theme initializes before styles',all(p.read_text().index('assets/theme-init.js')<p.read_text().index('assets/style.css') for p in pages))
    check('runtime asset parity',all((ROOT/'web'/name).read_bytes()==(SITE/'assets'/name).read_bytes() for name in ('app.js','style.css','theme-init.js')))
    for md in (ROOT/'exports').rglob('*.md'):
        broken=[]
        for ref in re.findall(r'\]\(([^)]+)\)',md.read_text()):
            if not urlsplit(ref).scheme and not (md.parent/ref).is_file():broken.append(ref)
        check('markdown links: '+str(md.relative_to(ROOT/'exports')),not broken,','.join(broken))
    for p in (ROOT/'scripts').glob('*.py'):
        tokens=list(tokenize.generate_tokens(io.StringIO(p.read_text()).readline))
        check('zero code comments: '+p.name,not any(t.type==tokenize.COMMENT for t in tokens))
    forbidden=['Neteon Learning','YUAN','MOXA','pk_test_','sk_test_','sk_live_','clerk.accounts','localhost:8792']
    found=[]
    for p in SITE.rglob('*'):
        if not p.is_file() or p.suffix not in ('.html','.js','.json','.md','.css'):continue
        raw=p.read_text()
        for needle in forbidden:
            if needle in raw:found.append(str(p.relative_to(SITE))+': '+needle)
    check('reference-project isolation',not found,','.join(found[:10]))
    check('no shared client defaults',all(not b.get('customer_url') for b in books.values()))
    source_paths=[p for folder in ('content','web','scripts') for p in (ROOT/folder).rglob('*') if p.is_file() and '__pycache__' not in p.parts]
    output_paths=[p for p in SITE.rglob('*') if p.is_file()]
    receipt=dict(status='PASS' if not failures else 'FAIL',checked_at=datetime.now(timezone.utc).isoformat(),checks_passed=sum(c['passed'] for c in checks),checks_total=len(checks),source_sha256=digest(source_paths),site_sha256=digest(output_paths),checks=checks,failures=failures,limits=['Deterministic gates do not establish factual truth.','Browser interactions are recorded separately in evidence/browser.json.','This harness does not operate customer systems or publish content.'])
    (ROOT/'evidence/harness.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2)+'\n')
    print('HARNESS '+receipt['status']+': '+str(receipt['checks_passed'])+'/'+str(receipt['checks_total'])+' checks')
    for failure in failures:print('FAIL:',failure)
    return 1 if failures else 0

if __name__=='__main__':
    sys.exit(main())
