function toggleBurger() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeBurger() {
  document.getElementById('navLinks').classList.remove('open');
}

function openLightbox(title, desc, imgSrc) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  document.getElementById('lb-title').textContent = title;
  document.getElementById('lb-desc').textContent = desc;
  document.getElementById('lb-img-src').src = imgSrc || '';
  lb.classList.add('open');
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.star').forEach(s => {
    s.addEventListener('click', function() {
      const val = parseInt(this.dataset.i);
      document.querySelectorAll('.star').forEach(st => {
        st.classList.toggle('active', parseInt(st.dataset.i) <= val);
      });
    });
  });
});

function showFeedback(msg) {
  const el = document.createElement('div');
  el.textContent = msg;
  Object.assign(el.style, {
    position:'fixed', bottom:'24px', left:'50%', transform:'translateX(-50%)',
    background:'var(--surface)', color:'var(--text)',
    border:'1px solid var(--accent)', borderRadius:'var(--radius)',
    padding:'12px 24px', fontFamily:'var(--font-mono)', fontSize:'.82rem',
    zIndex:'9999', boxShadow:'0 0 24px var(--accent-glow)',
    transition:'opacity .3s'
  });
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 2500);
}

document.querySelectorAll('.nav-logo, .nav-links a').forEach(function(el) {
  el.addEventListener('click', closeBurger);
});
