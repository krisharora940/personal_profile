/**
 * Theme Management System
 * Handles light/dark/system theme with localStorage persistence
 */

class ThemeManager {
  constructor() {
    this.STORAGE_KEY = 'theme-preference';
    this.THEME_ATTRIBUTE = 'data-theme';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.applyTheme(this.getTheme());
    this.updateThemeButtons();
    this.watchSystemTheme();
  }

  getTheme() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored || 'light';
  }

  applyTheme(theme) {
    if (theme === 'system') {
      theme = 'light';
    }

    document.documentElement.setAttribute(this.THEME_ATTRIBUTE, theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
    this.updateThemeButtons();
  }

  setTheme(theme) {
    this.applyTheme(theme);
    this.updateThemeButtons();
  }

  updateThemeButtons() {
    const current = this.getTheme();
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', current === 'dark');
      themeToggle.title = `Switch to ${current === 'light' ? 'dark' : 'light'} mode`;
    }

    if (themeIcon) {
      themeIcon.textContent = current === 'dark' ? '☀️' : '🌙';
    }
  }

  setupEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.applyTheme(e.matches ? 'dark' : 'light');
      this.updateThemeButtons();
    });
  }

  watchSystemTheme() {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', (e) => {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) {
        this.applyTheme('light');
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}
