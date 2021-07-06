
let body = document.getElementsByTagName('body')[0];
let createH1 = document.createElement('h1');
createH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(createH1);
let createFirstDiv = document.createElement('div');
createFirstDiv.className = 'main-content';
body.appendChild(createFirstDiv)
let createSecondDiv = document.createElement('div');
createSecondDiv.className = 'center-content';
document.querySelector('.main-content').appendChild(createSecondDiv);
let createTagP = document.createElement('p');
createTagP.innerText = 'olaaaa';
document.querySelector('.center-content').appendChild(createTagP);
let createLeftContent = document.createElement('div');
createLeftContent.className = 'left-content';
document.querySelector('.main-content').appendChild(createLeftContent);
let createRightContent = document.createElement('div');
createRightContent.className = 'right-content';
document.querySelector('.main-content').appendChild(createRightContent);
let createImage = document.createElement('img');
createImage.src = 'https://picsum.photos/200';
createImage.className = 'small-image';
document.querySelector('.left-content').appendChild(createImage);
let createUl = document.createElement('ul');
for (let i = 1; i < 11; i += 1) {
  let createLi = document.createElement('li');
  createLi.innerText = i;
  createUl.appendChild(createLi);
}
document.querySelector('.right-content').appendChild(createUl);
for (let i = 0; i < 3; i += 1) {
  document.querySelector('.main-content').appendChild(document.createElement('h3'));
}
document.querySelector('h1').className = 'title';
let classToH3 = document.querySelector('.main-content').querySelectorAll('h3');
for (let i = 0; i < classToH3.length; i += 1) {
  classToH3[i].className = 'description';
}
document.querySelector('.main-content').removeChild(document.querySelector('.left-content'));
document.querySelector('.right-content').style.marginRight = 'auto';
document.querySelector('.center-content').style.backgroundColor = 'green';
let removeTwo = document.querySelector('ul').childNodes;
for (let i = removeTwo.length - 2; i < removeTwo.length; i += 1){
  document.querySelector('ul').removeChild(removeTwo[i]);
  i -= 1; // pois quando remove 1 ele altera o index do array, e remover 1 é a mesma coisa de i - 1
}