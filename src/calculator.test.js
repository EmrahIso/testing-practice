const calculator = require('./calculator');

test('The result is not empty(add: 1)', () => {
  expect(calculator.add(4, 2)).not.toBe('');
});

test('The result is not empty (subtract: 1)', () => {
  expect(calculator.subtract(4, 2)).not.toBe('');
});

test('The result is not empty (divide: 1)', () => {
  expect(calculator.divide(4, 2)).not.toBe('');
});

test('The result is not empty (multiply: 1)', () => {
  expect(calculator.multiply(4, 2)).not.toBe('');
});

test('Does calculation works (add: 1)', () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test('Does calculation works (add: 2)', () => {
  expect(calculator.add(0, 0)).toBe(0);
});

test('Does calculation works (add: 3)', () => {
  expect(calculator.add(0, -1)).toBe(-1);
});

test('Does calculation works (add: 4)', () => {
  expect(calculator.add(11, 19)).toBe(30);
});

test('Does calculation works (subtract: 1)', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('Does calculation works (subtract: 2)', () => {
  expect(calculator.subtract(0, 0)).toBe(0);
});

test('Does calculation works (subtract: 3)', () => {
  expect(calculator.subtract(0, 5)).toBe(-5);
});

test('Does calculation works (subtract: 4)', () => {
  expect(calculator.subtract(11, 19)).toBe(-8);
});

test('Does calculation works (divide: 1)', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Does calculation works (divide: 2)', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Does calculation works (divide: 3)', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});

test('Does calculation works (divide: 4)', () => {
  expect(calculator.divide(18, 6)).toBe(3);
});

test('Does calculation works (multiply: 1)', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('Does calculation works (multiply: 2)', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('Does calculation works (multiply: 3)', () => {
  expect(calculator.multiply(-5, -5)).toBe(25);
});

test('Does calculation works (multiply: 4)', () => {
  expect(calculator.multiply(-3, 6)).toBe(-18);
});
