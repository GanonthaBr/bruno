/* ============================================================
   main.js — Shared navigation, dark/light mode, i18n switcher
   ============================================================ */

// ---------- Theme ----------
const THEME_KEY = 'bg-theme';

const ICON_SUN  = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
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
  const btn     = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('nav-mobile');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    const isOpen = overlay.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

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

// ---------- Language switcher ----------
const LANG_META = [
  { code: 'en', label: 'English',  native: 'English'  },
  { code: 'fr', label: 'Français', native: 'Français'  },
  { code: 'ar', label: 'العربية',  native: 'العربية'   }
];

const ICON_GLOBE = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
const ICON_CHEV  = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

function initLangSwitcher() {
  const lang    = (window.I18n && window.I18n.lang) || 'en';
  const actions = document.querySelector('.nav__actions');
  if (!actions) return;

  // Desktop switcher
  const sw = document.createElement('div');
  sw.className = 'lang-switcher';
  sw.innerHTML = `
    <button class="lang-switcher__btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Select language">
      ${ICON_GLOBE}
      <span class="lang-switcher__label">${lang.toUpperCase()}</span>
      ${ICON_CHEV}
    </button>
    <div class="lang-switcher__dropdown" role="listbox">
      ${LANG_META.map(l => `
        <button class="lang-option${l.code === lang ? ' active' : ''}"
                data-lang="${l.code}" role="option" aria-selected="${l.code === lang}">
          ${l.native}
        </button>`).join('')}
    </div>`;

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) actions.insertBefore(sw, themeBtn);
  else actions.appendChild(sw);

  const btn      = sw.querySelector('.lang-switcher__btn');
  const dropdown = sw.querySelector('.lang-switcher__dropdown');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = sw.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', () => {
    sw.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
  });

  dropdown.addEventListener('click', e => {
    const opt = e.target.closest('.lang-option');
    if (opt && window.I18n) window.I18n.setLang(opt.dataset.lang);
  });

  // Mobile nav — append a compact row of language buttons
  const mobileNav = document.getElementById('nav-mobile');
  if (mobileNav) {
    const row = document.createElement('div');
    row.className = 'mobile-lang-row';
    LANG_META.forEach(l => {
      const b = document.createElement('button');
      b.className = 'mobile-lang-btn' + (l.code === lang ? ' active' : '');
      b.dataset.lang = l.code;
      b.textContent  = l.native;
      b.addEventListener('click', () => { if (window.I18n) window.I18n.setLang(l.code); });
      row.appendChild(b);
    });
    mobileNav.appendChild(row);
  }
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getTheme());

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

  initMobileNav();
  setActiveNav();
  initLangSwitcher();

  // Apply data-i18n translations to any static elements
  if (window.I18n) window.I18n.applyTranslations();
});
