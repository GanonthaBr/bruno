/* ============================================================
   main.js — Shared navigation, dark/light mode, utilities
   ============================================================ */

// ---------- Theme ----------
const THEME_KEY = 'bg-theme';

function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
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
