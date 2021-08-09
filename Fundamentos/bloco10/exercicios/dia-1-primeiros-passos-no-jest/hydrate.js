const hydrate = (string) => {
  const nums = string.replace(/\D/g, " ").split(' ');
  const result = nums.reduce((acc, cur) => acc + Number(cur), 0);
  return result === 1 ? '1 copo de água' : `${result} copos de água`;
}

module.exports = hydrate