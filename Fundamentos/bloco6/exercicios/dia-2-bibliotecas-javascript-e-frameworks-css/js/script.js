const statesArray = [
  { uf: 'AC', nome: 'Acre' },
  { uf: 'AL', nome: 'Alagoas' },
  { uf: 'AP', nome: 'Amapá' },
  { uf: 'AM', nome: 'Amazonas' },
  { uf: 'BA', nome: 'Bahia' },
  { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' },
  { uf: 'ES', nome: 'Espirito Santo' },
  { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' },
  { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' },
  { uf: 'MG', nome: 'Minas Gerais' },
  { uf: 'PA', nome: 'Pará' },
  { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PR', nome: 'Paraná' },
  { uf: 'PE', nome: 'Pernambuco' },
  { uf: 'PI', nome: 'Piauí' },
  { uf: 'RJ', nome: 'Rio de Janeiro' },
  { uf: 'RN', nome: 'Rio Grande do Norte' },
  { uf: 'RS', nome: 'Rio Grande do Sul' },
  { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' },
  { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SP', nome: 'São Paulo' },
  { uf: 'SE', nome: 'Sergipe' },
  { uf: 'TO', nome: 'Tocantins' }
];

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

const textArea = document.getElementById('resume')
M.textareaAutoResize(textArea);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.start-date');
  var instances = M.Datepicker.init(elems);
});

function states(array) {
  const statesDocument = document.getElementById('state');
  for(state of array) {
    let newOption = document.createElement('option');
    newOption.innerText = state.nome;
    newOption.value = state.uf;
    statesDocument.appendChild(newOption);
  }
} 
states(statesArray);

function dateVerifier() {
  const dateElement = document.getElementById('start-date');
  const date = new Date(dateElement.value);
  const maxDate = new Date();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);
  if (date > maxDate) {
    alert('Voce vem do futuro???');
    return false;
  }else if (date < minDate) {
    alert('Voce deveria estar aposentado, nao criando curriculo');
    return false;
  }
  return true;
}

function getChecked() {
  const element = document.getElementsByName('Tipo');
  for (let i = 0; i < element.length; i += 1) {
    if (element[i].checked === true) {
      return {name: 'Tipo', value: element[i].value}
    }
  }
  return {name: element[0].name, value: element[0].value}
}

function getData() {
  let allData = Array.from(document.querySelectorAll('form fieldset input')).reduce((accumulator, input) =>
    ({...accumulator, [input.name] : input.value}),{}); //accumulator comeca com um objeto vazio, e conforme vai indo ele acidiona um novo elemento ao objeto e salva no accumulator, ate ter o objeto com todos os dados do array
  const radio = getChecked();
  const textArea = document.querySelector('form fieldset textarea');
  const select = document.querySelector('form fieldset select');
  allData[textArea.name] = textArea.value;
  allData[select.name] = select.value;
  allData[radio.name] = radio.value;
  return allData;
}

function submitForm() {
  const button = document.getElementById('submit-button');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    dateVerifier();
    const allData = getData();
    createFormsResult(allData);
  })
}
submitForm();

function removeOldForms(id) {
  const oldElement = document.getElementById(id);
  oldElement.innerHTML = '';
}

function createFormsResult(object) {
  const formsCompleted = document.getElementById('forms-completed');
  const objectKeys = Object.keys(object);
  removeOldForms('forms-completed');
  for(const key of objectKeys) {
    const newElement = document.createElement('div');
    const textKey = document.createElement('span');
    const textValue = document.createElement('span');
    textKey.innerText = `${key}:`;
    textValue.innerText = object[key]
    newElement.appendChild(textKey);
    newElement.appendChild(textValue);
    formsCompleted.appendChild(newElement);
  }
  
}
