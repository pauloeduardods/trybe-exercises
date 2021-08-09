const searchEmployee = require('./bonus');

describe('Bonus', () => {
  it ('searchEmployee exists', () => {
    expect(searchEmployee).toBeDefined();
  });
  it ('searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  })
})