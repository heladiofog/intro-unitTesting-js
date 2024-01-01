const { sum, substract, multiply, divide } = require('./02-math');
// For consistency
test('Summing 2 + 2 should not to be equal to 5', () => {
  expect(sum(2, 2)).not.toBe(5);
});

test('adding 2 + 2 to be equal to 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('substracting 1 - 2 to be equal to -1', () => {
  expect(substract(1, 2)).toBe(-1);
});

test('multiplying 1 * 2 to be equal to 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('dividing 1 / 2 to be equal to 0.5', () => {
  const rta = divide(6, 2); // result to be asserted
  expect(rta).toBe(3);
  expect(divide(1, 2)).toBe(0.5);
});
// edge cases
test('Division by zero should return null', () => {
  const divisionByNull = divide(7, 0);
  expect(divisionByNull).toBeNull();
  expect(divide(88, 0)).toBeNull();
});
