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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const studentsClass = (object, subject) => {
  const lessons = Object.keys(object);
  let studentsCount = 0;
  for (let lesson of lessons) {
    if (object[lesson].materia === subject) studentsCount += object[lesson].numeroEstudantes;
  }
  return studentsCount;
};

console.log(studentsClass(allLessons, 'Matemática'));

const teacherSubject = (object, name) => {
  const lessons = Object.keys(object);
  const resultObj = {};
  const resultArr = [];
  const verifier = [];
  let numberOfStudents = 0;
  for (let lesson of lessons) {
    if (object[lesson].professor === name) {
      resultArr.push(object[lesson].materia);
      Object.assign(resultObj, object[lesson]);
      resultObj.materia = resultArr;
    }
  }
  for (let subject of resultArr) {
    if (!verifier.includes(subject)) {
      verifier.push(subject);
      numberOfStudents += studentsClass(object, subject);
    }
  }
  resultObj.numeroEstudantes = numberOfStudents;
  return resultObj;
};

console.log(teacherSubject(allLessons, 'Maria Clara'));