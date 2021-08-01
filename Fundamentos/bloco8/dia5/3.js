const getNationality = ({ firstName, nationality = 'brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality({...otherPerson, nationality: 'brazilian'})); // Ivan is Russian
console.log(getNationality(person));