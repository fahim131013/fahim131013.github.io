'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();}});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window && !reduceMotion){
 document.body.classList.add('motion-ready');
 const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}}),{threshold:0.08});
 document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 const selected=button.dataset.filter;let count=0;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 document.querySelectorAll('.paper').forEach(paper=>{paper.hidden=paper.dataset.status!==selected;if(!paper.hidden)count++;});
 document.querySelector('#publication-count').textContent=count+' '+(selected==='Under review'?'manuscripts under review':selected.toLowerCase()+' works');
}));
const progress=document.querySelector('.scroll-progress');let scheduled=false;
function updateScroll(){const d=document.documentElement;progress.style.width=((d.scrollHeight-d.clientHeight)>0?d.scrollTop/(d.scrollHeight-d.clientHeight)*100:0)+'%';scheduled=false;}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateScroll);}},{passive:true});updateScroll();
if('IntersectionObserver' in window){const sections=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navigation.querySelectorAll('a').forEach(a=>a.classList.toggle('current',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-15% 0px -55% 0px',threshold:0});document.querySelectorAll('main section[id]').forEach(s=>sections.observe(s));}
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('.copy-email').addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText('tanvirahmedfahim.baiust@gmail.com');status.textContent='Email copied';}catch{status.textContent='Select the email address above to copy it.';}window.setTimeout(()=>{status.textContent='';},5000);});

const galleries=JSON.parse(document.querySelector('#gallery-data').textContent);
const lightbox=document.querySelector('.lightbox');
let activeGallery=[],activeIndex=0,galleryTrigger=null;
function renderGallery(){
 const item=activeGallery[activeIndex];
 const img=lightbox.querySelector('.lightbox-image');img.src=item.src;img.alt=item.caption;
 lightbox.querySelector('#gallery-caption').textContent=item.caption;
 lightbox.querySelector('#gallery-position').textContent=(activeIndex+1)+' / '+activeGallery.length;
 lightbox.querySelector('.full-image').href=item.src;
 lightbox.querySelector('.gallery-prev').disabled=activeIndex===0;
 lightbox.querySelector('.gallery-next').disabled=activeIndex===activeGallery.length-1;
}
document.querySelectorAll('[data-gallery]').forEach(link=>link.addEventListener('click',e=>{
 if(typeof lightbox.showModal!=='function'||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
 e.preventDefault();galleryTrigger=link;activeGallery=galleries[link.dataset.gallery];activeIndex=Number(link.dataset.index);renderGallery();lightbox.showModal();document.body.classList.add('gallery-is-open');lightbox.querySelector('.gallery-close').focus();
}));
lightbox.querySelector('.gallery-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('close',()=>{document.body.classList.remove('gallery-is-open');galleryTrigger?.focus();});
function stepGallery(direction){const next=activeIndex+direction;if(next>=0&&next<activeGallery.length){activeIndex=next;renderGallery();}}
lightbox.querySelector('.gallery-prev').addEventListener('click',()=>stepGallery(-1));
lightbox.querySelector('.gallery-next').addEventListener('click',()=>stepGallery(1));
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();stepGallery(e.key==='ArrowLeft'?-1:1);}});
lightbox.addEventListener('click',e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close();}});
