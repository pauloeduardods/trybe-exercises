const searchEmployee = require('./bonus');

describe('Bonus', () => {
  it ('searchEmployee exists', () => {
    expect(searchEmployee).toBeDefined();
  });
  it ('searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it ('no parameters', () => {
    expect(() => searchEmployee()).toThrow('No parameters');
  });
  it ('id not find', () => {
    expect(() => searchEmployee('32312', 'sla')).toThrowError('ID não identificada');
  })
  it ('info not find', () => {
    expect(() => searchEmployee('1256-4', 'macaco')).toThrowError('Informação indisponível');
  })
})