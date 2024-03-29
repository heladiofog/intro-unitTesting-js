const Person = require('./06-person');

describe('Testing the Person class', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Juli', 45, 1.7);
  });

  test('Should return IMC down', () => {
    // const person = new Person('Juli', 45, 1.7);
    // Local Arrange
    person.weight = 45;
    // Act
    const imcObtained = person.calculateIMC();
    // Assert
    expect(imcObtained).toBe('down');
  });

  test('Should return IMC normal', () => {
    // const person = new Person('Lion', 59, 1.7);
    // Local Arrange
    person.weight = 59;
    // Act
    const imcObtained = person.calculateIMC();
    // Assert
    expect(imcObtained).toBe('normal');
  });
});
