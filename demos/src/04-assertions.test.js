// matchers
test('testing objects', () => {
  const data = { name: 'Tezca' };
  data.lastName = 'Tlipoca';
  expect(data).toEqual({ name: 'Tezca', lastName: 'Tlipoca' });
});

test('testing null values', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('testing booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();

  expect(true).toBeTruthy();
});

test('testing strings', () => {
  const stringName = 'Pequeboo';
  expect(stringName).toMatch(/Boo/i);
  expect(stringName).toEqual('Pequeboo');
});

test('testing list / arrays', () => {
  const fruits = ['pineaple', 'banana', 'peach', '🍊'];
  expect(fruits).toContain('🍊');
  expect(fruits).not.toContain('🍎');
  expect(fruits).toContain('banana');
});
