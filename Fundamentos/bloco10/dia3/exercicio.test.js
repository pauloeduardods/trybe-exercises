let { somar, subtrair, multiplicar, dividir } = require('./exercicio');

describe('exercicios', () => {
  it('exercicio1', () => {
    expect(subtrair(1, 2)).toBe(-1);
  });
  it('exercicio2', () => {
    multiplicar = jest.fn().mockImplementation(() => 10);
    expect(multiplicar(10, 29)).toBe(10);
  });
  it('exercicio3', () => {
    somar = jest.fn().mockImplementation((a, b) => (a + b));
    expect(somar(1, 2)).toBe(3);
  });
  it('exercicio4', () => {
    dividir = jest.fn().mockImplementation(() => 15);
    expect(dividir(2,3)).toBe(15);
  });
});