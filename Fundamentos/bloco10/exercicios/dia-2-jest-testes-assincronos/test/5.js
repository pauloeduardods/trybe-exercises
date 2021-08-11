beforeEach(() => console.log('1 - beforeEach')); // 1
afterEach(() => console.log('1 - afterEach')); // 2

test('', () => console.log('1 - test')); // 3

// result = 1 - 3 - 2

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach')); // 1
  afterEach(() => console.log('2 - afterEach')); // 2

  test('', () => console.log('2 - test')); // 3

  // result = 1 - 3 - 2
});

// realResult = 1 - 3 - 2 - 1 - 1.2 - 3.2 - 2.2 - 2