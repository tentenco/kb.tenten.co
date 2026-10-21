(() => {
  let preference = 'system';
  try {
    const value = localStorage.getItem('tenten-kb-theme');
    if (['light','dark','system'].includes(value)) preference = value;
  } catch (error) {}
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.dataset.theme = preference === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : preference;
})();
