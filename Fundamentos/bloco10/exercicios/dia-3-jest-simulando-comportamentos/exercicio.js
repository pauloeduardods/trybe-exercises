const randomNumber = () => {
  return Math.round(Math.random() * 100);
};
const func1 = (string) => string.toUpperCase();
const func2 = (string) => string[0];
const func3 = (string1, string2) => string1 + string2;

module.exports = { randomNumber, func1, func2, func3 };