// Theme toggle: toggles the 'dark-mode' class on <html>
(function(){
  const storageKey = 'site-theme';
  const className = 'dark-mode';

  function applyTheme(theme){
    const html = document.documentElement;
    if(theme === 'dark') html.classList.add(className);
    else html.classList.remove(className);
    // update icon/text if present
    const icon = document.getElementById('theme-icon');
    const txt = document.getElementById('theme-text');
    if(icon) icon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
    if(txt) txt.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  function toggleTheme(e){
    if(e) e.preventDefault();
    const current = localStorage.getItem(storageKey) || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function(){
    const saved = localStorage.getItem(storageKey) || 'light';
    applyTheme(saved);
    const toggle = document.getElementById('theme-toggle');
    if(toggle) toggle.addEventListener('click', toggleTheme);
  });
})();
