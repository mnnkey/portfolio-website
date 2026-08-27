(function () {
  'use strict';

  var storageKey = 'theme-preference';
  var root = document.documentElement;

  function savedTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      return value === 'dark' || value === 'light' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function initialTheme() {
    return savedTheme() ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function updateThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#1c1e21' : '#ffffff');
    }
  }

  function applyTheme(theme, save) {
    var button = document.getElementById('light-toggle');

    root.setAttribute('data-theme', theme);

    if (save) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {}
    }

    updateThemeColor(theme);

    if (button) {
      var nextTheme = theme === 'dark' ? 'light' : 'dark';
      button.dataset.theme = theme;
      button.setAttribute('aria-label', 'Theme: ' + theme + '. Change color theme');
      button.title = 'Theme: ' + theme + '. Click to use ' + nextTheme + ' theme';
    }
  }

  function initialize() {
    var theme = initialTheme();
    var button = document.getElementById('light-toggle');

    applyTheme(theme, false);

    if (button) {
      button.addEventListener('click', function () {
        var currentTheme = button.dataset.theme || initialTheme();
        var nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme, true);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
}());
