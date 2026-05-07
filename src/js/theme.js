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

  /**
   * Get current theme preference
   * Priority: localStorage > light
   */
  getTheme() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored || 'light';
  }

  /**
   * Apply theme to document
   */
  applyTheme(theme) {
    if (theme === 'system') {
      theme = 'light';
    }

    document.documentElement.setAttribute(this.THEME_ATTRIBUTE, theme);
    localStorage.setItem(this.STORAGE_KEY, theme);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
    this.updateThemeButtons();
  }

  /**
   * Set specific theme
   */
  setTheme(theme) {
    this.applyTheme(theme);
    this.updateThemeButtons();
  }

  /**
   * Update theme toggle button states
   */
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

  /**
   * Setup event listeners for theme toggle button
   */
  setupEventListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.applyTheme(e.matches ? 'dark' : 'light');
      this.updateThemeButtons();
    });
  }

  /**
   * Watch for system theme changes
   */
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

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}
