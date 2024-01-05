const Person = require('./06-person');

describe('Testing the Person class', () => {
  let person;

  beforeEach(() => {
    person = new Person('Juli', 45, 1.7);
  });

  test('Should return IMC down', () => {
    // const person = new Person('Juli', 45, 1.7);
    person.weight = 45;
    const imcObtained = person.calculateIMC();
    expect(imcObtained).toBe('down');
  });

  test('Should return IMC normal', () => {
    // const person = new Person('Lion', 59, 1.7);
    person.weight = 59;
    const imcObtained = person.calculateIMC();
    expect(imcObtained).toBe('normal');
  });
});
