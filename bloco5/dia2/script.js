//part1

document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'green';
// document.getElementById('primeiroFilhoDoFilho').innerText = 'texto qualquer';  //tanto faz
document.getElementById('primeiroFilhoDoFilho').innerHTML = '<p>Texto Qualquer</p>';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);

//part2

document.getElementById('elementoOndeVoceEsta').parentNode.appendChild(document.createElement('div'));
let newElement = document.createElement('div');
newElement.id = 'terceiroFilho';
document.getElementById('elementoOndeVoceEsta').appendChild(newElement);
document.getElementById('primeiroFilhoDoFilho').appendChild(document.createElement('div'))
console.log(document.getElementById('primeiroFilhoDoFilho').firstElementChild.nextElementSibling.parentNode.nextElementSibling.nextElementSibling);

//part3