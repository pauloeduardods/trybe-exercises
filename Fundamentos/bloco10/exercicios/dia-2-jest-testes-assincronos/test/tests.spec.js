const uppercase = require('../src/1');

describe('teste exercicio 1 uppercase async', () => {
  it('uppercase ola mundo must be OLA MUNDO', (done) => {
    uppercase('ola mundo', (result => {
      try {
        expect(result).toBe('OLA MUNDO');
        done();
      } catch (error) {
        done(error)
      }
    }))
  })
});