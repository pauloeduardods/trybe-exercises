function darkMode() {
  let root = document.documentElement;
  let darkModeButton = document.getElementById('dark-mode-button');
  function setTheme() {
    let darkModeState = localStorage.getItem('dark-mode');
    if (darkModeState === 'false' || !darkModeState) {
      root.className = 'light';
      darkModeButton.innerText = 'Dark Mode: OFF';
    }
    else {
      root.className = 'dark';
      darkModeButton.innerText = 'Dark Mode: ON';
    }
  }
  setTheme();
  darkModeButton.addEventListener('click', function() {
    let darkModeState = localStorage.getItem('dark-mode');
    if (!darkModeState || darkModeState === 'false') localStorage.setItem('dark-mode', true);
    else localStorage.setItem('dark-mode', false);
    setTheme();
  });
}
darkMode();

function textSize() {
  const defaultTextSize = 16;
  let textSizeInput = document.getElementById('text-size');
  function setTextSize() {
    let textSizeSaved = localStorage.getItem('text-size');
    let mainContent = document.querySelector('.body');
    if (!textSizeSaved) {
      textSizeInput.placeholder = `Tamanho do texto atual ${defaultTextSize}`;
      mainContent.style.fontSize = `${defaultTextSize}px`;
    }
    else {
      textSizeInput.placeholder = `Tamanho do texto atual ${textSizeSaved}`;
      mainContent.style.fontSize = `${textSizeSaved}px`;
    }
  }
  setTextSize();
  textSizeInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') { 
      let newValue = Number(textSizeInput.value);
      textSizeInput.value = '';
      if (isNaN(newValue) === false && newValue !== 0) localStorage.setItem('text-size', newValue);
      else localStorage.setItem('text-size', defaultTextSize);
      setTextSize();
    }
  });
}
textSize();