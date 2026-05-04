/* ============================================================
   i18n.js — Internationalization engine
   Supported: en (English), fr (French), ar (Arabic)
   Detection priority: localStorage → navigator.languages → 'en'
   Load order: i18n.js → translations.js → data files → main.js
   ============================================================ */

(function () {
  const LANG_KEY   = 'bg-lang';
  const SUPPORTED  = ['en', 'fr', 'ar'];
  const RTL        = new Set(['ar']);
  const LOCALE_MAP = { en: 'en-US', fr: 'fr-FR', ar: 'ar-EG-u-nu-latn' };
  const LABEL_MAP  = { en: 'EN', fr: 'FR', ar: 'AR' };

  function detect() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const langs = Array.isArray(navigator.languages) && navigator.languages.length
      ? Array.from(navigator.languages)
      : [navigator.language || 'en'];
    for (const l of langs) {
      const code = l.split('-')[0].toLowerCase();
      if (SUPPORTED.includes(code)) return code;
    }
    return 'en';
  }

  const lang = detect();

  // Apply lang + dir immediately — before first paint — to avoid flash
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', RTL.has(lang) ? 'rtl' : 'ltr');

  /* ---- Translation lookup ---- */
  function t(key) {
    if (typeof TRANSLATIONS === 'undefined') return key;
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const en   = TRANSLATIONS.en;
    const parts = key.split('.');
    let val = dict;
    let fallback = en;
    for (const p of parts) {
      val      = (val      != null) ? val[p]      : undefined;
      fallback = (fallback != null) ? fallback[p] : undefined;
    }
    if (val != null && val !== '') return val;
    if (fallback != null && fallback !== '') return fallback;
    return key;
  }

  /* ---- Apply data-i18n attributes to DOM ---- */
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key  = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const val  = t(key);
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
  }

  /* ---- Switch language (reloads page) ---- */
  function setLang(newLang) {
    if (!SUPPORTED.includes(newLang)) return;
    localStorage.setItem(LANG_KEY, newLang);
    location.reload();
  }

  /* ---- Localize a data object ---- */
  // Merges obj.translations[lang] over the base object (English fallback).
  function localize(obj) {
    if (!obj) return obj;
    const overrides = (obj.translations && (obj.translations[lang] || obj.translations.en)) || {};
    return Object.assign({}, obj, overrides);
  }

  window.I18n = {
    lang,
    t,
    setLang,
    localize,
    applyTranslations,
    locale   : LOCALE_MAP[lang] || 'en-US',
    label    : LABEL_MAP[lang]  || 'EN',
    supported: SUPPORTED,
    isRTL    : RTL.has(lang)
  };
})();
