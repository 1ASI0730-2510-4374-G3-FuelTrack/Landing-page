const i18n = {
  currentLang: 'en',

  async load(lang) {
    const response = await fetch(`assets/i18n/${lang}.json`);
    const translations = await response.json();
    this.apply(translations);
    this.currentLang = lang;
  },

  apply(translations) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  }
};

// Inicia con español por defecto
document.addEventListener('DOMContentLoaded', () => {
  i18n.load('es');
});

// Cambiar idioma (puedes conectarlo a botones de cambio de idioma)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const selected = btn.textContent.toLowerCase();
    i18n.load(selected);
  });
});
