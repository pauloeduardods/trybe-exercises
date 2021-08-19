const exercicios = require('./exercicio');

describe('exercises', () => {
  it('exercicio1', () => {
    const mock = jest.spyOn(exercicios, 'randomNumber');
    mock.mockImplementation(() => 10);
    expect(mock()).toBe(10);
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it('exercicios2', () => {
    const mock = jest.spyOn(exercicios, 'randomNumber');
    mock.mockImplementationOnce(() => 10)
    mock.mockImplementationOnce((a, b) => a / b);
    expect(mock(200, 10)).toBe(10);
    expect(mock(200, 10)).toBe(20);
  });
  it('exercicio3', () => {
    exercicios.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(exercicios.randomNumber(1,2,3)).toBe(6);
    exercicios.randomNumber.mockReset();
    expect(exercicios.randomNumber()).not.toBe(101);
  });
});