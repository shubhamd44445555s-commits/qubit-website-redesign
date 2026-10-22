const E="";/* Paste a Formspree / Web3Forms / Getform URL here to receive form submissions. Empty = opens the visitor's email app to support@qubit.fit */
document.getElementById('mb').onclick=()=>document.querySelector('header nav').classList.toggle('o');
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&(x.target.classList.add('in'),io.unobserve(x.target))),{threshold:.12});document.querySelectorAll('.rv').forEach(n=>io.observe(n));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f)),m=f.querySelector('.msg');
if(E){try{const r=await fetch(E,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;f.reset();m.textContent='Thank you! We’ll be in touch.'}catch(x){m.textContent='Something went wrong. Please email support@qubit.fit.'}}
else location.href='mailto:support@qubit.fit?subject='+encodeURIComponent(f.dataset.s||'Website enquiry')+'&body='+encodeURIComponent(Object.values(d).join('\n'))}));
try{if(!localStorage.ck){const c=document.getElementById('ck');c.hidden=false;c.querySelector('button').onclick=()=>{localStorage.ck=1;c.hidden=true}}}catch(x){}
