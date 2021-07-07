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
  let date = new Date(dateElement.value);
  let maxDate = new Date();
  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);
  console.log(maxDate, minDate);
  if (date > maxDate) {
    alert('Voce vem do futuro???');
    return false;
  }else if (date < minDate) {
    alert('Voce deveria estar aposentado, nao criando curriculo');
    return false;
  }
  return true;
}

function submitForm() {
  const button = document.getElementById('submit-button');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(dateVerifier());
  })
}
submitForm();