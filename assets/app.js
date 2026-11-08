(() => {
const $=s=>document.querySelector(s), data=JSON.parse($('#case-data').textContent), dialog=$('#viewer'); let index=0;
function show(n){index=Math.max(0,Math.min(data.frames.length-1,n)); const f=data.frames[index]; $('#large-image').src=f.src; $('#large-image').alt=`${data.area}, frame ${index+1}, ${f.time}`; $('#full-image').href=f.src; $('#caption').textContent=`${data.area} · ${index+1}/12 · ${f.time}`; $('#previous').disabled=index===0; $('#next').disabled=index===11;}
document.querySelectorAll('.frame').forEach(b=>b.addEventListener('click',()=>{show(Number(b.dataset.frame));dialog.showModal();document.body.classList.add('viewing');}));
$('#previous').addEventListener('click',()=>show(index-1));$('#next').addEventListener('click',()=>show(index+1));$('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('viewing'));
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();show(index-1);}if(e.key==='ArrowRight'){e.preventDefault();show(index+1);}});
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
})();