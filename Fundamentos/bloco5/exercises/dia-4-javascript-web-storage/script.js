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
    if (textSizeSaved === null) textSizeSaved = defaultTextSize;
    textSizeInput.placeholder = `Tamanho do texto atual ${textSizeSaved}`;
    mainContent.style.setProperty('font-size', `${textSizeSaved}px`);
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

function lineHeight() {
  const defaultValue = 'normal';
  let lineHeightInput = document.getElementById('line-height');
  function setLineHeight() {
    let mainContent = document.querySelector('.body');
    let lineHeightSaved = localStorage.getItem('line-height');
    mainContent.style.setProperty('line-height', lineHeightSaved);
  }
  setLineHeight();
  lineHeightInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      let newValue = lineHeightInput.value;
      lineHeightInput.value = '';
      if (isNaN(newValue) === false && newValue !== '') localStorage.setItem('line-height', newValue);
      else localStorage.setItem('line-height', defaultValue);
      setLineHeight();
    }
  })
}
lineHeight();

function pageFont() {
  const fonts = {
    courier: "'Courier New', Courier, monospace",
    franklin: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    georgia: "Georgia, 'Times New Roman', Times, serif",
    default: ''
  };
  const fontMenu = document.getElementById('font-menu');
  function setFont() {
    let fontSaved = localStorage.getItem('font');
    let mainContent = document.querySelector('.body');
    mainContent.style.setProperty('font-family', fontSaved);
  }
  setFont();
  fontMenu.addEventListener('click', event => {
    localStorage.setItem('font', fonts[event.target.id]);
    setFont();
  })
}
pageFont()