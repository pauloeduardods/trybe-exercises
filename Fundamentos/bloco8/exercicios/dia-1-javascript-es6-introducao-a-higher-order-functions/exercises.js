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

const answersChecker = (arrayAnswers, arrayStudentAnswers) => {
  let result = 0;
  for (let i = 0; i < arrayAnswers.length; i += 1) {
    if (arrayStudentAnswers[i] !== 'N.A') {
      if (arrayAnswers[i] === arrayStudentAnswers[i]) result += 1;
      else result -= 0.5;
    }
  }
  return result;
}

const testResult = (answers, studentAnswers, comparator) => comparator(answers, studentAnswers);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(testResult(RIGHT_ANSWERS, STUDENT_ANSWERS, answersChecker));