const analyzeArray = require('./analyzeArray');

test('The result is not empty (1)', () => {
  expect(analyzeArray[[1, 8, 3, 4, 2, 6]]).not.toBe('');
});

test('The result is object (1)', () => {
  expect(typeof analyzeArray([1, 8, 3, 4, 2, 6]) === 'object').toBeTruthy();
});

test('The minimal value (1)', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('The minimal value (2)', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).min).toBe(-8);
});

test('The minimal value (3)', () => {
  expect(analyzeArray([0, -99, -5, 65, 9]).min).toBe(-99);
});

test('The average value (1)', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('The average value (2)', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).average).toBe(-4);
});

test('The average value (3)', () => {
  expect(analyzeArray([0, -99, -5, 65, 9]).average).toBe(-6);
});

test('The maximal value (1)', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test('The maximal value (2)', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).max).toBe(-1);
});

test('The maximal value (3)', () => {
  expect(analyzeArray([0, -99, -5, 65, 9]).max).toBe(65);
});

test('The length value (1)', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test('The length value (2)', () => {
  expect(analyzeArray([-1, -8, -3, -4, -2, -6]).length).toBe(6);
});

test('The length value (3)', () => {
  expect(analyzeArray([0, -99, -5, 65, 9]).length).toBe(5);
});
