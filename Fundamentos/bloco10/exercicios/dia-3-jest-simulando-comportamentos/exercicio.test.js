let exercicios = require('./exercicio');

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
    expect(exercicios.randomNumber()).not.toBe(6);
  });
  describe('exercicio4 - 5', () => {
    it('func1', () => {
      const first = jest
        .spyOn(exercicios, "func1")
        .mockImplementation(a => a.toLowerCase());

      expect(first("UPPERCASE")).toBe("uppercase");
      expect(first).toHaveBeenCalled();
      expect(first).toHaveBeenCalledTimes(1);
      expect(first).toHaveBeenCalledWith("UPPERCASE");

      exercicios.func1.mockRestore();

      expect(exercicios.func1("lowercase")).toBe("LOWERCASE");

      expect(exercicios.func1('olaa')).toBe('OLAA');
      exercicios.func1 = jest.fn().mockImplementation((string) => string.toLowerCase());
      expect(exercicios.func1('OLAA')).toBe('olaa');
    });
    it('func2', () => {
      expect(exercicios.func2('string')).toBe('s');
      const mock = jest.spyOn(exercicios, 'func2').mockImplementation((string) => string[string.length - 1]);
      expect(exercicios.func2('string')).toBe('g');
    });
    it('func3', () => {
      expect(exercicios.func3('hello', ' world')).toBe('hello world');
      exercicios.func3 = jest.fn().mockImplementation((a, b, c) => a + b + c);
      expect(exercicios.func3('azy', 'bzy', 'czy')).toBe('azybzyczy');
    });
  });
});