`Create a Password verifications class called “PasswordVerifier”.

I - Add the following verifications to a master function called “Verify()”

1-password should be larger than 8 chars
2-password should not be null
3-password should have one uppercase letter at least
4-password should have one lowercase letter at least
5-password should have one number at least
6-Each one of these should throw an exception with a different message of your choosing

II - Add feature: Password is OK if at least three of the previous conditions is true
III - Add feature: password is never OK if item 1.4 is not true.
IV - Assume Each verification takes 1 second to complete. How would you solve items 2 and 3 so tests can run faster?`

const assert = require('assert');

function verify(password) {
  let verifications = {
    length: {
      value: false,
      message: 'Password should be larger than 8 chars'
    },
    upperCase: {
      value: false,
      message: 'Password should have one uppercase letter at least'
    },
    number: {
      value: false,
      message: 'Password should have one number at least'
    },
    lowerCase: {
      value: false,
      message: 'Password should have one lowercase letter at least'
    },
  };
  if (password.length > 8) verifications.length.value = true; // I.1
  if (/[A-Z]/.test(password)) verifications.upperCase.value = true; // I.2 - I.3 - IV
  if (/[a-z]/.test(password)) verifications.lowerCase.value = true; // I.4
  if (/[0-9]/.test(password)) verifications.number.value = true; // I.5
  const values = Object.values(verifications);
  if (verifications.lowerCase.value === false) throw Error(verifications.lowerCase.message); // III
  let result = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (values[i].value === true) result += 1;
  }
  if (result >= 4) return true; // II
  for (key in verifications) {
    if (verifications[key].value === false) throw Error(verifications[key].message);
  }
}

assert.strictEqual(typeof verify, 'function');

assert.throws(() => {
  verify('123'), /Password should have one lowercase letter at least/
});

assert.throws(() => {
  verify('a123'), /Password should be larger than 8 chars/
});

assert.throws(() => {
  verify('a12345678'), /Password should have one uppercase letter at least/
});

assert.throws(() => {
  verify('Aaaaaaaaaaaaa'), /Password should have one number at least/
});

assert.strictEqual(verify('aaaAAA123'), true);