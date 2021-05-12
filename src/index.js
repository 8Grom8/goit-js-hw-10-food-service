import './styles.css';
import './js/menu';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const sweatcher = document.querySelector('.theme-switch__toggle');
sweatcher.addEventListener('change', changeTheme);
function changeTheme(e) {
  if (e.target.checked) {
    updateLocaleStorage('Theme', Theme.DARK);
    updateThemes(Theme.DARK, Theme.LIGHT);
  } else {
    updateLocaleStorage('Theme', Theme.LIGHT);
    updateThemes(Theme.LIGHT, Theme.DARK);
  }
}
function updateThemes(newTheme, oldTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
}

function updateLocaleStorage(key, value) {
  localStorage.setItem(key, value);
}

function startTheme() {
  const theme = localStorage.getItem('Theme') ?? Theme.LIGHT;
  document.body.classList.add(theme);
  sweatcher.checked = theme === Theme.DARK;
}

startTheme();
