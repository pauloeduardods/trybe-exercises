document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = 'green';
// document.getElementById('primeiroFilhoDoFilho').innerText = 'texto qualquer';  //tanto faz
document.getElementById('primeiroFilhoDoFilho').innerHTML = '<p>Texto Qualquer</p>';
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);
console.log(document.getElementById('pai').firstElementChild.nextElementSibling.nextElementSibling);