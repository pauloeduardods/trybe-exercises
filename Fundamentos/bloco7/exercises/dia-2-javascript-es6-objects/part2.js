const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addFunc = (object, param, value) => object[param] = value;

const listKeys = object => Object.keys(object);

const objectLength = object => Object.keys(object).length;

const objectValues = object => Object.values(object);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const students = object => {
  const lessons = Object.keys(object);
  let total = 0;
  for (let lesson of lessons) {
    total += object[lesson].numeroEstudantes;
  }
  return total
}

const getValueByNumber = (object, index) => object[(Object.keys(object)[index])];

const verifyPair = (object, key, value) => object[key] === value ? true : false;