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
  describe('exercicio4', () => {
    it('func1', () => {
      expect(exercicios.func1('olaa')).toBe('OLAA');
      exercicios.func1 = jest.fn().mockImplementationOnce((string) => string.toLowerCase());
      expect(exercicios.func1('OLAA')).toBe('olaa');
    });
    it('func2', () => {
      expect(exercicios.func2('string')).toBe('s');
      exercicios.func2 = jest.fn().mockImplementation((string) => string[string.length - 1]);
      expect(exercicios.func2('string')).toBe('g');
    });
    it('func3', () => {
      expect(exercicios.func3('hello', ' world')).toBe('hello world');
      exercicios.func3 = jest.fn().mockImplementation((a, b, c) => a + b + c);
      expect(exercicios.func3('azy', 'bzy', 'czy')).toBe('azybzyczy')
    });
  });
});