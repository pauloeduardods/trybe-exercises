const { encode, decode } = require('./encode');

describe('Exercicio2', () => {
  it ('encode is a function', () => {
    expect(encode).toBeDefined();
    expect(typeof encode).toEqual('function');
  });
  it ('decode is a function', () => {
    expect(encode).toBeDefined();
    expect(typeof decode).toEqual('function');
  });
  it ('a,e,i,o,u must be 1,2,3,4,5', () => {
    expect('1,2,3,4,5').toEqual(encode('a,e,i,o,u'));
  });
})
