// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  return await (await fetch(API_URL, myObject)).json();
};

const displayJoke = async () => {
  const joke = await fetchJoke();
  document.getElementById('jokeContainer').innerText = joke.joke;
}

window.onload = () => displayJoke();