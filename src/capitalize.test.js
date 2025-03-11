const capitalize = require('./capitalize');

test('The result is not empty (1)', () => {
  expect(capitalize('string')).not.toBe('');
});

test('Is the length same (1)', () => {
  expect(capitalize('string').length).toBe('string'.length);
});

test('Is the same actual string (1)', () => {
  expect(capitalize('string').toLowerCase()).toBe('string');
});

test('Is string capitalized (1)', () => {
  expect(capitalize('string').at(0)).toBe('s'.toUpperCase());
});
