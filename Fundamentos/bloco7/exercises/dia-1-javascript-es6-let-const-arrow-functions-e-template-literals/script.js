const button = document.getElementById('botao');

const counterUpdate = (number) => {
  const element = document.getElementById('counter');
  element.innerText =number;
}
let count = 0;
counterUpdate(0);

button.addEventListener('click', () => {
  count += 1;
  counterUpdate(count);
})
