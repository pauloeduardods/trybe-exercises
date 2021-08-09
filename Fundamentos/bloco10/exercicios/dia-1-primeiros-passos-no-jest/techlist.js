const techList = (arr, name) => arr.length === 0 ? 'Vazio!' : arr.sort().map((tech) => ({ tech, name }));

module.exports = {techList};