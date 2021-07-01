
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
createRightContent.className = 'left-content';
document.querySelector('.main-content').appendChild(createRightContent);