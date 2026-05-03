/* ============================================================
   main.js — Shared navigation, dark/light mode, utilities
   ============================================================ */

// ---------- Theme ----------
const THEME_KEY = 'bg-theme';

const ICON_SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
const ICON_MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? ICON_SUN : ICON_MOON;
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ---------- Mobile nav ----------
function initMobileNav() {
  const btn = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('nav-mobile');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  overlay.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => overlay.classList.remove('open'));
  });
}

// ---------- Active nav link ----------
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    const page = href.split('/').pop();
    link.classList.toggle('active', page === path || (path === '' && page === 'index.html'));
  });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getTheme());

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

  initMobileNav();
  setActiveNav();
});
