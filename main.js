/* ================================================================
   PORTFOLIO — main.js
   ================================================================ */

// ---- Scroll Reveal via IntersectionObserver ----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ---- Mobile Sidebar Toggle ----
const navToggle  = document.getElementById('nav-toggle');
const sidebar    = document.querySelector('.sidebar');
const overlay    = document.getElementById('mobile-overlay');

if (navToggle && sidebar) {
  navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('visible');
  });
}

if (overlay) {
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
}

// ---- Set Active Nav Link ----
const currentFile = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.sidebar-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (
    href === currentFile ||
    (currentFile === '' && href === 'index.html') ||
    (window.location.pathname.endsWith('/') && href === 'index.html')
  ) {
    link.classList.add('active');
  }
});
