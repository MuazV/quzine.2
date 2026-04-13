/* ============================================================
   Quzine Kahvaltı Evi — quzine.js
   ============================================================ */

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target); // bir kez tetikle
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.rv, .rv-l, .rv-r').forEach((el) => {
  revealObserver.observe(el);
});

/* ── HAMBURger MENÜ ── */
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Bir linke tıklanınca menüyü kapat
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Dışarıya tıklanınca kapat
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
}
