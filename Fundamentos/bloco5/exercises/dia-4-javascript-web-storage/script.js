function darkMode() {
  let darkModeState = localStorage.getItem('dark-mode');
  let root = document.documentElement;
  let darkModeText = document.getElementById('dark-mode-button');
  if (darkModeState === 'false' || !darkModeState) {
    root.className = 'light';
    darkModeText.innerText = 'Dark Mode: OFF';
  }
  else {
    root.className = 'dark'
    darkModeText.innerText = 'Dark Mode: ON';
  }
}
darkMode();

document.getElementById('dark-mode-button').addEventListener('click', setDarkMode);

function setDarkMode() {
  let darkModeState = localStorage.getItem('dark-mode');
  if (!darkModeState || darkModeState === 'false') localStorage.setItem('dark-mode', true);
  else localStorage.setItem('dark-mode', false);
  darkMode();
}