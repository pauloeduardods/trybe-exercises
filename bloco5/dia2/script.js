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

const include = ['pai', 'elementoOndeVoceEsta', 'primeiroFilhoDoFilho'];
const verifier = (idName, include) => {
  let elements = document.querySelector(`#${idName}`);
  let elementsList = elements.childNodes;
  for (let index = 0; index < elementsList.length; index += 1) {
    if (include.includes(elementsList[index].id)) {
      verifier(elementsList[index].id, include.filter(value => value !== elementsList[index].id));
    }
    else {
      elements.removeChild(elementsList[index]);
      index -= 1; //quando remove muda o tamanho do array e voce tem q voltar 1 (oq foi removido no caso) no index para verificar o q seria o proximo
    }
  }
}
verifier('paiDoPai', include);
