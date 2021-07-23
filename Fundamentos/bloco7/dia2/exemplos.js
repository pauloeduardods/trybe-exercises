const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países); //retorna 1 array com arrays em q o index 0 é a chave e o 1 é o valor 
console.log(pairKeyValue);

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithValues = (student) => Object.values(student);

console.log(listSkillsValuesWithValues(student));

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log(listSkills(student));

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName); //ele serve para juntar 2 objetos, pois se  fizer const newObj = obj e alterar o "newObj" o obj tambem vai ser alterado, aquele meu erro la
newPerson.name = 'Gilberto';                         //dai nesse caso ele junta 2 objects e um deles é vazio, fazendo com que voce de um real clone do obj
console.log(newPerson);                              //para array seria const newArray = array.slice();
console.log(person);