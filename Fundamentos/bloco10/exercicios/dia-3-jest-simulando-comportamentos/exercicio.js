const fetch = require('node-fetch')

const API_URL = 'https://icanhazdadjoke.com/';

const randomNumber = () => {
  return Math.round(Math.random() * 100);
};
const func1 = (string) => string.toUpperCase();
const func2 = (string) => string[0];
const func3 = (string1, string2) => string1 + string2;

function request() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  return new Promise((resolve, reject) => 
    fetch(url)
      .then((response) => response
        .json()
        .then((result) => response.ok ? resolve(result) : reject(result)))
  ); 
}

function bonus() {
  return fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => data.joke);
}

module.exports = { randomNumber, func1, func2, func3, request, bonus };