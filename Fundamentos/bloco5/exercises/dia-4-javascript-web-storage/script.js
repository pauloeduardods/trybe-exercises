function darkMode() {
  let darkModeState = localStorage.getItem('dark-mode');
  let page = document.body;
  let darkModeText = document.getElementById('dark-mode-button');
  if (darkModeState === 'false' || !darkModeState) {
    page.classList.remove('dark-mode');
    darkModeText.innerText = 'Dark Mode: OFF';
  }
  else {
    page.classList.add('dark-mode');
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