// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
// Crie uma função que mude a cor do quadrado vermelho para branco.
// Crie uma função que corrija o texto da tag <h1>.
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
document.getElementsByTagName('p')[1].innerText = "Eu me vejo comprando mais bitcoin, e odiando o estado";
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.querySelector('h1').innerText = "exercicio 5.1 - escriptojavacrazyman";
for(tag of document.getElementsByTagName('p')){
  tag.innerText = tag.innerText.toUpperCase()
  // tag.style.textTransform = 'uppercase'
  console.log(tag.innerText)
};
