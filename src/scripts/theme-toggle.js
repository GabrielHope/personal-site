// src/scripts/theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const html = document.documentElement;
  const sun = toggle.querySelector('.sun-icon');
  const moon = toggle.querySelector('.moon-icon');

  // Function to update icon visibility and class
  const setTheme = (theme) => {
    if (theme === 'light') {
      html.classList.add('light');
      sun.classList.add('hidden');
      moon.classList.remove('hidden');
    } else {
      html.classList.remove('light');
      sun.classList.remove('hidden');
      moon.classList.add('hidden');
    }
    localStorage.setItem('theme', theme);
  };

  // Load saved or system preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved) {
    setTheme(saved);
  } else if (!prefersDark) {
    setTheme('light');
  }

  // Toggle on click
  toggle.addEventListener('click', () => {
    const current = html.classList.contains('light') ? 'light' : 'dark';
    setTheme(current === 'light' ? 'dark' : 'light');
  });
});
