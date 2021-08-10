const uppercase = require('../src/1');
const getUserName = require('../src/2-3');

describe('teste exercicio 1 uppercase async', () => {
  it('uppercase ola mundo must be OLA MUNDO', (done) => {
    uppercase('ola mundo', (result => {
      try {
        expect(result).toBe('OLA MUNDO');
        done();
      } catch (error) {
        done(error)
      }
    }));
  });
});

describe('teste exercicio 2-3 findUserById and getUserName - promisse', () => {
  it('getUserName find user', () => (
    getUserName(1).then((res) => expect(res).toEqual('Mark'))
  ));
  it('getUserName not find user', () => {
    expect.assertions(1);
    return getUserName(10).catch((error) => expect(error).toEqual(new Error('User with 10 not found.')))
  })
});

describe('teste exercicio 2-3 findUserById and getUserName - promisse', () => {
  it('getUserName find user', async () => {
    expect(await getUserName(1)).toEqual('Mark');
    // ||
    const res = await getUserName(2);
    expect(res).toEqual('Paul');
  });
  it('getUserName not find user', async () => {
    expect.assertions(1)
    try {
      await getUserName(10);
    } catch (error) {
      expect(error).toEqual(new Error('User with 10 not found.'));
    }
  });
});