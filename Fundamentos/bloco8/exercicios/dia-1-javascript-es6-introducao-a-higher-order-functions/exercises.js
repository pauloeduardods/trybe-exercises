const createUser = (fullName = '') => `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createUser));

const compare = (random, number) => random === number;

const result = (number, func) => {
  const randomNum = Math.round(Math.random() * 5);
  if (func(randomNum, number)) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

console.log(result(3, compare));