from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
import json
import sys

ROOT=Path(__file__).resolve().parents[1]
receipts=[ROOT/'evidence'/name for name in ('harness.json','harness-en.json')]
if not all(p.is_file() and json.loads(p.read_text())['status']=='PASS' for p in receipts):
    print('PACKAGE FAIL: run build.py and harness.py first',file=sys.stderr)
    sys.exit(1)
output=ROOT/'dist/tenten-knowledge-base-2026-10-21.zip'
output.parent.mkdir(exist_ok=True)
folders=('content','web','scripts','docs','research','site','exports','.github')
files=[p for name in folders for p in (ROOT/name).rglob('*') if p.is_file() and '__pycache__' not in p.parts]
files+=[ROOT/name for name in ('README.md','PLAN.md','AGENTS.md','.gitignore','vercel.json')]
files+=[ROOT/'evidence'/name for name in ('build.json','build-en.json','harness.json','harness-en.json','locale-mobile.json','locale-browser.json','locale-editorial.json','browser.json','browser-v1.json','browser-commerce.json','browser-human.json','mobile-human.json','product-mobile.json','product-performance.json','product-baseline.json','portable.json') if (ROOT/'evidence'/name).is_file()]
files+=[p for p in (ROOT/'evidence/screenshots').glob('*.png') if p.is_file()]
with ZipFile(output,'w',ZIP_DEFLATED) as archive:
    for p in sorted(files):archive.write(p,'tenten-knowledge-base/'+str(p.relative_to(ROOT)))
print('PACKAGE PASS:',output.name,output.stat().st_size,'bytes')
