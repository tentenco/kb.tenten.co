(() => {
'use strict';
const $ = selector => document.querySelector(selector);
const root = document.body.dataset.root || '';
const data = window.TENTEN_SEARCH;
const languageLink = $('#language-switch');
if (languageLink) {
  const updateLanguageLink = () => {
    const destination = new URL(languageLink.href,location.href);
    destination.search = location.search;
    destination.hash = location.hash;
    languageLink.href = destination.href;
  };
  updateLanguageLink();
  languageLink.addEventListener('click',updateLanguageLink);
  window.addEventListener('hashchange',updateLanguageLink);
}

document.documentElement.classList.add('js');
const themeSelect = $('#theme-select');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let themePreference = document.documentElement.dataset.themePreference || 'system';
function applyTheme() {
  document.documentElement.dataset.theme = themePreference === 'system' ? (systemTheme.matches ? 'dark' : 'light') : themePreference;
  document.documentElement.dataset.themePreference = themePreference;
  themeSelect.value = themePreference;
}
themeSelect.addEventListener('change', () => {
  themePreference = themeSelect.value;
  applyTheme();
  try { localStorage.setItem('tenten-kb-theme',themePreference); } catch (error) {}
});
systemTheme.addEventListener('change',applyTheme);
window.addEventListener('storage', event => {
  if (event.key === 'tenten-kb-theme') {
    themePreference = ['light','dark','system'].includes(event.newValue) ? event.newValue : 'system';
    applyTheme();
  }
});
applyTheme();
const menuToggle = $('#menu-toggle');
const sidebar = $('#sidebar');
const workspace = $('.workspace');
const mobile = matchMedia('(max-width: 760px)');
let menuFocus = null;
sidebar.inert = mobile.matches;
function menu(open) {
  const wasOpen = document.body.classList.contains('menu-open');
  document.body.classList.toggle('menu-open',open);
  sidebar.inert = mobile.matches && !open;
  workspace.inert = mobile.matches && open;
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
  if (open && !wasOpen) {
    menuFocus = document.activeElement;
    sidebar.setAttribute('role','dialog');
    sidebar.setAttribute('aria-modal','true');
    sidebar.setAttribute('aria-label','Knowledge navigation');
    $('#menu-close').focus();
  } else if (!open) {
    sidebar.removeAttribute('role');
    sidebar.removeAttribute('aria-modal');
    sidebar.removeAttribute('aria-label');
    if (menuFocus) menuFocus.focus({preventScroll:true});
    menuFocus = null;
  }
}
mobile.addEventListener('change',()=>menu(false));
menuToggle.addEventListener('click',()=>menu(!document.body.classList.contains('menu-open')));
$('#menu-close').addEventListener('click',()=>menu(false));
$('#mobile-shade').addEventListener('click',()=>menu(false));
const stateKey = 'tenten-kb-page-v2:'+location.pathname;
const detailNodes = [...document.querySelectorAll('main details')];
const contextFields = [...document.querySelectorAll('.packet-form input,.packet-form textarea')];
const fieldKey = field => field.type === 'checkbox' ? field.name+':'+field.value : field.name;
let storedState = {};
let storageAvailable = true;
try {
  const saved = JSON.parse(sessionStorage.getItem(stateKey) || '{}');
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) storedState = saved;
} catch (error) { storageAvailable = false; }
const initialState = storedState;
for (const [index,details] of detailNodes.entries()) {
  details.dataset.stateKey = details.id || 'details-'+index;
  const saved = storedState.details?.[details.dataset.stateKey];
  if (typeof saved === 'boolean') details.open = saved;
}
for (const field of contextFields) {
  const saved = storedState.fields?.[fieldKey(field)];
  if (field.type === 'checkbox' && typeof saved === 'boolean') field.checked = saved;
  else if (field.type !== 'checkbox' && typeof saved === 'string') field.value = saved;
}
function captureFields() {
  return Object.fromEntries(contextFields.map(field=>[fieldKey(field),field.type === 'checkbox' ? field.checked : field.value]));
}
function focusReference() {
  const element = document.activeElement;
  if (element?.closest('dialog')) return storedState.focus || null;
  if (element?.id && !element.closest('[inert]')) return {id:element.id,start:element.selectionStart,end:element.selectionEnd};
  if (element?.matches('summary')) return {details:element.parentElement.dataset.stateKey};
  return null;
}
function saveState() {
  storedState = {fields:captureFields(),details:Object.fromEntries(detailNodes.map(d=>[d.dataset.stateKey,d.open])),scroll:scrollY,focus:focusReference(),savedAt:Date.now()};
  try {
    sessionStorage.setItem(stateKey,JSON.stringify(storedState));
    const keys = Object.keys(sessionStorage).filter(key=>key.startsWith('tenten-kb-page-v2:'));
    if (keys.length > 20) {
      const oldest = keys.filter(key=>key!==stateKey).sort((a,b)=>(JSON.parse(sessionStorage.getItem(a))?.savedAt||0)-(JSON.parse(sessionStorage.getItem(b))?.savedAt||0));
      for (const key of oldest.slice(0,keys.length-20)) sessionStorage.removeItem(key);
    }
    storageAvailable = true;
  } catch (error) { storageAvailable = false; }
  if ($('#draft-status')) $('#draft-status').textContent = storageAvailable ? 'Content stays in this tab. You can clear it and undo.' : 'This browser cannot save drafts. Download the handoff before leaving.';
}
let saveTimer;
function scheduleSave() { clearTimeout(saveTimer); saveTimer=setTimeout(saveState,180); }
for (const details of detailNodes) details.addEventListener('toggle',scheduleSave);
for (const field of contextFields) field.addEventListener('input',scheduleSave);
window.addEventListener('pagehide',saveState);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden') saveState();});
const normalize = value => String(value || '').normalize('NFKC').toLocaleLowerCase().replace(/\s+/g,' ').trim();
const aliases = [['搬家','搬站','migration'],['主機','hosting'],['追蹤','量測','measurement'],['新人','onboarding'],['品牌','branding'],['自動化','automation']];
function terms(query) {
  const cleaned=normalize(query).replace(/^(what is|what are|how to|how do i|how does|how can i)\s+/,'').replace(/[、，,。？！?！:：→/]+/g,' ').trim().replace(/^(請問|我想知道|我想要|如何|怎麼)/,'').replace(/(要檢查什麼|要做什麼|需要做什麼|需要什麼|怎麼做|怎麼設定|如何設定|怎麼辦|是什麼|有什麼用)$/,'').trim();
  return (cleaned || normalize(query)).split(/\s+/).filter(Boolean).map(term=>aliases.find(group=>group.includes(term)) || [term]);
}
const searchIndex=(data?.books || []).map(book=>({book,fields:[[book.title,12],[book.keywords.join(' '),9],[book.summary,5],[book.body,1],[book.categoryTitle,2]].map(([text,weight])=>[normalize(text),weight])}));
function search(query,category='') {
  const groups=terms(query);
  return searchIndex.filter(item=>!category || item.book.category===category).map(item=>{
    let score=0;
    for(const alternatives of groups){
      const matches=item.fields.map(([text,weight])=>alternatives.some(term=>text.includes(term)) ? weight : 0);
      if(!matches.some(Boolean)) return {book:item.book,score:0};
      score+=Math.max(...matches);
    }
    if(groups.length && groups[0].some(term=>item.fields[0][0].startsWith(term))) score+=4;
    return {book:item.book,score:score || 1};
  }).filter(item=>item.score>0).sort((a,b)=>b.score-a.score || a.book.title.localeCompare(b.book.title,'en'));
}
function highlighted(element,text,query) {
  const tokens=terms(query).flat().filter(token=>token.length>=2);
  if(!tokens.length){element.textContent=text;return;}
  const escaped=tokens.map(token=>token.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));
  const pattern=new RegExp(escaped.join('|'),'gi');
  let offset=0;
  for(const match of text.matchAll(pattern)){
    element.append(document.createTextNode(text.slice(offset,match.index)));
    const mark=document.createElement('mark');mark.textContent=match[0];element.append(mark);
    offset=match.index+match[0].length;
  }
  element.append(document.createTextNode(text.slice(offset)));
}
function searchInput(input,callback) {
  let timer;
  let composing=false;
  const update=()=>{clearTimeout(timer);timer=setTimeout(callback,60);};
  input.addEventListener('compositionstart',()=>{composing=true;clearTimeout(timer);});
  input.addEventListener('compositionend',()=>{composing=false;update();});
  input.addEventListener('input',event=>{if(!composing&&!event.isComposing) update();});
}
const searchForm=$('#knowledge-search');
if(searchForm && data){
  const queryInput=$('#search-query');const categoryInput=$('#search-category');
  const results=$('#search-results');const status=$('#search-status');const clear=$('#clear-search');
  queryInput.maxLength=160;
  let lastRendered=null;
  function renderSearch(){
    const query=queryInput.value.trim().slice(0,160);const category=categoryInput.value;
    const key=query+'\u0000'+category;
    if(lastRendered===key) return;
    lastRendered=key;
    const ranked=search(query,category);const fragment=document.createDocumentFragment();
    status.textContent=query ? `${ranked.length} results for “${query}”` : `${ranked.length} articles. Enter a query to narrow the results.`;
    clear.hidden=!queryInput.value;
    if(!ranked.length){
      const empty=document.createElement('div');empty.className='empty-state';
      const title=document.createElement('h2');title.textContent='No results yet';
      const hint=document.createElement('p');hint.textContent='Try a shorter term such as migration, GA4 or hosting, or clear the topic filter.';
      const reset=document.createElement('button');reset.type='button';reset.className='button';reset.textContent='Clear search and filters';
      reset.addEventListener('click',()=>{queryInput.value='';categoryInput.value='';updateSearch(true);queryInput.focus();});
      empty.append(title,hint,reset);fragment.append(empty);
    }
    for(const {book} of ranked){
      const link=document.createElement('a');link.href=root+book.url;link.className='search-result';
      const categoryLabel=document.createElement('span');categoryLabel.className='eyebrow';categoryLabel.textContent=book.categoryTitle;
      const title=document.createElement('h2');highlighted(title,book.title,query);
      const summary=document.createElement('p');highlighted(summary,book.summary,query);
      link.append(categoryLabel,title,summary);fragment.append(link);
    }
    results.replaceChildren(fragment);
  }
  function updateSearch(push){
    const url=new URL(location.href);url.search='';
    if(queryInput.value.trim()) url.searchParams.set('q',queryInput.value.trim().slice(0,160));
    if(categoryInput.value) url.searchParams.set('category',categoryInput.value);
    try{if(url.href!==location.href) history[push?'pushState':'replaceState'](null,'',url);}catch(error){}
    renderSearch();
  }
  function restoreSearch(){
    const params=new URLSearchParams(location.search);
    queryInput.value=(params.get('q')||'').slice(0,160);categoryInput.value=params.get('category')||'';renderSearch();
  }
  searchInput(queryInput,()=>updateSearch(false));
  categoryInput.addEventListener('change',()=>updateSearch(true));
  searchForm.addEventListener('submit',event=>{event.preventDefault();updateSearch(true);});
  clear.addEventListener('click',()=>{queryInput.value='';updateSearch(true);queryInput.focus();});
  window.addEventListener('popstate',restoreSearch);
  restoreSearch();
}else if(searchForm){
  $('#search-status').textContent='Search data could not load. Reload or use the full directory below.';
  $('.search-directory').open=true;
}
const quick=$('#quick-search');const quickInput=$('#quick-query');const quickResults=$('#quick-results');
let quickFocus=null;
function renderQuick(){
  const query=quickInput.value.trim();
  const suggestions=['ecommerce-launch','migration','klaviyo','measurement','fde'];
  const ranked=query ? search(query) : suggestions.map(id=>({book:data.books.find(book=>book.id===id)})).filter(item=>item.book);
  $('#quick-status').textContent=query ? `${ranked.length} matches; showing ${Math.min(6,ranked.length)}` : 'Suggested topics';
  const fragment=document.createDocumentFragment();
  for(const {book} of ranked.slice(0,6)){
    const link=document.createElement('a');link.href=root+book.url;link.className='quick-result';
    const text=document.createElement('span');const title=document.createElement('span');highlighted(title,book.title,query);
    const category=document.createElement('small');category.textContent=book.categoryTitle;text.append(title,category);
    const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
    link.append(text,arrow);fragment.append(link);
  }
  if(!ranked.length){const empty=document.createElement('p');empty.className='quick-empty';empty.textContent='No matches. Try GA4 or migration, or open full search to browse topics.';fragment.append(empty);}
  quickResults.replaceChildren(fragment);
  $('#quick-all').href=root+'search.html'+(query?'?q='+encodeURIComponent(query):'');
}
function openQuick(){
  if(!data || !quick.showModal){$('#nav-query').focus();return;}
  menu(false);quickFocus=document.activeElement;renderQuick();quick.showModal();document.body.classList.add('search-open');quickInput.focus();quickInput.select();
}
if(data && quick.showModal){
  $('#quick-search-trigger').hidden=false;$('.top-search').hidden=true;
  $('#quick-search-trigger').addEventListener('click',openQuick);
  $('#quick-close').addEventListener('click',()=>quick.close());
  quick.addEventListener('close',()=>{document.body.classList.remove('search-open');quickFocus?.focus({preventScroll:true});});
  quick.addEventListener('click',event=>{if(event.target===quick){const rect=quick.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)quick.close();}});
  quick.addEventListener('keydown',event=>{
    if(event.isComposing) return;
    const links=[...quickResults.querySelectorAll('a')];const index=links.indexOf(document.activeElement);
    if(event.key==='ArrowDown'){event.preventDefault();links[Math.min(index+1,links.length-1)]?.focus();}
    if(event.key==='ArrowUp'){event.preventDefault();if(index<=0)quickInput.focus();else links[index-1].focus();}
    if(event.key==='Enter'&&document.activeElement===quickInput){event.preventDefault();if(links.length)links[0].click();}
  });
  searchInput(quickInput,renderQuick);
}
const shortcut=/Mac|iPhone|iPad/.test(navigator.platform)?'⌘ K':'Ctrl K';
for(const label of document.querySelectorAll('[data-shortcut]'))label.textContent=shortcut;
document.addEventListener('keydown',event=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
    event.preventDefault();if(quick.open)quick.close();else openQuick();
  }
  if(event.key==='Escape'&&!quick.open)menu(false);
  if(event.key==='Tab'&&document.body.classList.contains('menu-open')){
    const focusables=[...sidebar.querySelectorAll('a,button')].filter(el=>el.getClientRects().length);
    if(event.shiftKey&&document.activeElement===focusables[0]){event.preventDefault();focusables.at(-1).focus();}
    else if(!event.shiftKey&&document.activeElement===focusables.at(-1)){event.preventDefault();focusables[0].focus();}
  }
});
const snackbar=$('#snackbar');let toastTimer;let undoAction=null;
function closeToast(){clearTimeout(toastTimer);if(snackbar.contains(document.activeElement))$('#clear-draft')?.focus();snackbar.hidden=true;undoAction=null;}
function toast(message,undo=null){
  clearTimeout(toastTimer);$('#snackbar-message').textContent=message;undoAction=undo;$('#snackbar-undo').hidden=!undo;snackbar.hidden=false;
  if(!undo)toastTimer=setTimeout(()=>{if(!snackbar.contains(document.activeElement))closeToast();},6000);
}
$('#snackbar-close').addEventListener('click',closeToast);
$('#snackbar-undo').addEventListener('click',()=>{const undo=undoAction;closeToast();undo?.();});
const packet=$('.packet');
if(packet){
  const packetData=JSON.parse($('#packet-data').textContent);
  const form=$('.packet-form');const preview=$('#packet-text');const status=$('#packet-status');
  const copyButton=$('#copy-packet');const downloadButton=$('#download-packet');const group=packetData.scenario;
  const value=name=>form.elements[name].value.trim()||'To be supplied';
  let textFrame=0;let copyTimer;
  function packetText(){
    const ids=[...form.querySelectorAll('input[name="knowledge"]:checked')].map(input=>input.value);
    const context=`# Agent task packet: ${packet.dataset.packetTitle}\n\n## Project context\n\n- Project: ${value('project')}\n- Goal: ${value('goal')}\n- URLs / data: ${value('targets')}\n- Connections and existing authorization: ${value('access')}\n- Constraints and acceptance criteria: ${value('constraints')}\n\n## Working rules\n\n${packetData.contract}\n\n`;
    let scope='';
    if(group){
      scope='## What to prepare for this guide\n\n'+group.inputs.map(item=>'- '+item).join('\n')+'\n\nExpected deliverable: '+group.deliverable+'\n\n';
      if(group.note)scope+='Scope limits: '+group.note+'\n\n';
      if(ids.length!==group.ids.length)scope+='Selected scope: only the articles below are included. Check the remaining dependencies for the complete guide.\n\n';
    }
    const knowledge=ids.map(id=>packetData.books.find(book=>book.id===id).markdown).join('\n\n---\n\n');
    preview.value=context+scope+'## Full articles\n\n'+knowledge;
    copyButton.disabled=!ids.length;downloadButton.disabled=!ids.length;
    status.textContent=ids.length?`${ids.length} complete articles included`:'Select at least one article to copy or download';
    textFrame=0;return preview.value;
  }
  const updatePacket=()=>{if(!textFrame)textFrame=requestAnimationFrame(packetText);scheduleSave();};
  form.addEventListener('input',updatePacket);form.addEventListener('change',updatePacket);form.addEventListener('submit',event=>event.preventDefault());
  copyButton.addEventListener('click',async()=>{
    const text=packetText();
    try{
      if(!navigator.clipboard||!window.isSecureContext)throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(text);copyButton.textContent='Copied ✓';status.textContent='Copied. Paste it for a colleague or agent.';toast('Handoff copied');
      clearTimeout(copyTimer);copyTimer=setTimeout(()=>{copyButton.textContent='Copy handoff';},2200);
    }catch(error){
      $('.packet-preview').open=true;preview.focus();preview.select();status.textContent='Full text selected. Press ⌘C / Ctrl+C to copy, or download the .md file.';
    }
  });
  downloadButton.addEventListener('click',()=>{
    const url=URL.createObjectURL(new Blob([packetText()],{type:'text/markdown;charset=utf-8'}));
    const link=document.createElement('a');link.href=url;link.download='tenten-agent-'+(packet.dataset.scenario||'task')+'.md';document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),15000);status.textContent='Markdown handoff download created.';toast('Handoff ready to download');
  });
  $('#clear-draft').addEventListener('click',()=>{
    const prior=captureFields();
    for(const field of contextFields){if(field.type==='checkbox')field.checked=true;else field.value='';}
    packetText();saveState();form.elements.project.focus();
    toast('Draft cleared',()=>{for(const field of contextFields){if(field.type==='checkbox')field.checked=prior[fieldKey(field)];else field.value=prior[fieldKey(field)];}packetText();saveState();form.elements.project.focus();toast('Draft restored');});
  });
  packetText();
  if(!storageAvailable)$('#draft-status').textContent='This browser cannot save drafts. Download the handoff before leaving.';
}
function revealHash(hash){
  let id;try{id=decodeURIComponent(hash.slice(1));}catch(error){return;}
  const target=document.getElementById(id);if(!target)return;
  let opened=false;
  for(let element=target;element;element=element.parentElement){if(element.matches('details')&&!element.open){element.open=true;opened=true;}}
  if(opened)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
}
document.addEventListener('click',event=>{
  if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const link=event.target.closest('a[href^="#"]');if(link)revealHash(link.hash);
});
window.addEventListener('hashchange',()=>revealHash(location.hash));
revealHash(location.hash);
const contents=[...document.querySelectorAll('.toc a[href^="#"]')].map(link=>({link,section:document.getElementById(link.hash.slice(1))})).filter(item=>item.section);
const progress=$('#reading-progress');
if(contents.length){
  let pending=false;
  function updateContents(){
    const threshold=$('.topbar').getBoundingClientRect().height+70;
    const current=contents.filter(item=>item.section.getBoundingClientRect().top<=threshold).at(-1)||contents[0];
    for(const item of contents){item.link.classList.toggle('is-current',item===current);if(item===current)item.link.setAttribute('aria-current','location');else item.link.removeAttribute('aria-current');}
    if(progress){const article=$('.knowledge');const total=Math.max(1,article.offsetTop+article.offsetHeight-innerHeight);progress.style.transform=`scaleX(${Math.min(1,Math.max(0,scrollY/total))})`;}
    pending=false;
  }
  window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateContents);}},{passive:true});
  window.addEventListener('resize',updateContents);updateContents();
}
const navigation=performance.getEntriesByType('navigation')[0]?.type;
if(['reload','back_forward'].includes(navigation)&&!location.hash&&initialState.savedAt){
  const restore=()=>{
    const focus=initialState.focus;
    const target=focus?.id?document.getElementById(focus.id):detailNodes.find(d=>d.dataset.stateKey===focus?.details)?.querySelector('summary');
    if(target&&!target.closest('[inert]')){
      target.focus({preventScroll:true});
      if(typeof focus.start==='number'&&target.setSelectionRange){try{target.setSelectionRange(focus.start,focus.end);}catch(error){}}
    }
    window.scrollTo({top:Math.max(0,Number(initialState.scroll)||0),behavior:'instant'});
  };
  if(document.readyState==='complete')requestAnimationFrame(restore);else window.addEventListener('load',()=>requestAnimationFrame(restore),{once:true});
}
})();
