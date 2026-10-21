from pathlib import Path
import json
import hashlib
import re

ROOT=Path(__file__).resolve().parents[1]
CATALOG=json.loads((ROOT/'content/en/ui.json').read_text())
PATTERN=re.compile('|'.join(re.escape(key) for key in sorted(CATALOG,key=len,reverse=True))) if CATALOG else None

def translate(text,locale):
    if locale!='en' or PATTERN is None:return text
    return PATTERN.sub(lambda match:CATALOG[match.group()],text)


def validate_translation_sources():
    manifest=json.loads((ROOT/'content/en/manifest.json').read_text())
    paths=sorted((ROOT/'content').glob('*.json'))+sorted((ROOT/'content/playbooks').glob('*.json'))
    actual={p.relative_to(ROOT/'content').as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in paths}
    if manifest['sources']!=actual:raise ValueError('English source review is stale; review translations and update content/en/manifest.json')
    structural={'id','ids','category','number','featured','categories','sources','related','reviewed_at','status','url','kind','observed_at','access','evidence'}
    def compare(source,target,path):
        if type(source)!=type(target):raise ValueError('Translation type mismatch: '+path)
        if isinstance(source,dict):
            if source.keys()!=target.keys():raise ValueError('Translation fields differ: '+path)
            for key,value in source.items():
                if key in structural and value!=target[key]:raise ValueError('Translation reference mismatch: '+path+'/'+key)
                compare(value,target[key],path+'/'+key)
        elif isinstance(source,list):
            if len(source)!=len(target) and not path.endswith('/keywords'):raise ValueError('Translation item count differs: '+path)
            for index,(a,b) in enumerate(zip(source,target)):compare(a,b,path+'/'+str(index))
    for path in paths:
        relative=path.relative_to(ROOT/'content')
        target=ROOT/'content/en'/relative
        if not target.is_file():raise ValueError('Missing English translation: '+str(relative))
        compare(json.loads(path.read_text()),json.loads(target.read_text()),str(relative))
