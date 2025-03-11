const caesarCipher = require('./caesarCipher');

test('The result is not empty (1)', () => {
  expect(caesarCipher('dfdd', 4)).not.toBe('');
});

test('Checking that the cipher works without factor ciphering argument (1)', () => {
  expect(caesarCipher('hello')).toBe('hello');
});

test('Checking that the cipher works with factor set to 0 (1)', () => {
  expect(caesarCipher('hello', 0)).toBe('hello');
});

test('Wrapping from z to a (1)', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Wrapping from z to a (2)', () => {
  expect(caesarCipher('abc', 26)).toBe('abc');
});

test('Wrapping from z to a (3)', () => {
  expect(caesarCipher('string', 5)).toBe('xywnsl');
});

test(`Making sure that function isn't case sensitive (1)`, () => {
  expect(caesarCipher('StrinG')).toBe('StrinG');
});

test(`Making sure that function isn't case sensitive (2)`, () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Others characters should remain untouched (1)', () => {
  expect(caesarCipher('HeLLo, WORlD!', 3)).toBe('KhOOr, ZRUoG!');
});

test('Others characters should remain untouched (2)', () => {
  expect(caesarCipher('232,.+', 88)).toBe('232,.+');
});

test('Others characters should remain untouched (3)', () => {
  expect(caesarCipher('   ERet  ', 1)).toBe('   FSfu  ');
});
