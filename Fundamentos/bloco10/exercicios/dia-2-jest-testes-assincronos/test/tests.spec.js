const uppercase = require('../src/1');
const getUserName = require('../src/2-3');
const getRepos = require('../src/4');
const { getAnimal, findAnimalByAge } = require('../src/6');

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

describe('teste exercicio 2 findUserById and getUserName - promisse', () => {
  it('getUserName find user', () => (
    getUserName(1).then((res) => expect(res).toEqual('Mark'))
  ));
  it('getUserName not find user', () => {
    expect.assertions(1);
    return getUserName(10).catch((error) => expect(error).toEqual(new Error('User with 10 not found.')))
  })
});

describe('teste exercicio 3 findUserById and getUserName - async/await', () => {
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

describe('teste exercicio 4 getRepos', () => {
  it('check for repositories sd-01-week4-5-project-todo-list', async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result.includes('sd-01-week4-5-project-todo-list')).toBeTruthy();
  });
  it('check for repositories sd-01-week4-5-project-meme-generator', async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy();
  })
});


describe('Testando promise - findAnimalByName', () => {
  describe('When exists animal searched', () => {
    test('return animal Obj', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('When not exists animal searched', () => {
    test('Return error', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Exercicio 6.2', () => {
  it('When find animal', async () => {
    expect.assertions(1);
    return expect(await findAnimalByAge(5)).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
  });
  it('When not find animal return error', async () => {
    expect.assertions(1);
    try {
      await findAnimalByAge(100);
    } catch (error) {
      return expect(error).toEqual(new Error('Nao tem animal com essa idade'));
    }
  });
});