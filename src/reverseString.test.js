const reverseString = require('./reverseString');

test('The result is not empty (1)', () => {
  expect(reverseString('string')).not.toBe('');
});

test('Is the length same (1)', () => {
  expect(reverseString('string').length).toBe('string'.length);
});

test('Is the same actual string (1)', () => {
  expect(reverseString('string')).toBe('string'.split('').reverse().join(''));
});

test('Is the string reversed (1)', () => {
  expect(reverseString('string').at(-2)).toBe('string'.at(1));
});

test('Is the string reversed (2)', () => {
  expect(reverseString('string').at(-4)).toBe('string'.at(3));
});

test('Is the string reversed (3)', () => {
  expect(reverseString('string').at(-1)).toBe('string'.at(0));
});
