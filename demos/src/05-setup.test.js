describe('Grouping test cases with Jest Hooks!', () => {
  beforeAll(() => {
    console.log('Before All (setup)');
    // por ejemplo: inicializar a DB
  });

  beforeEach(() => {
    console.log('Before Each Test');
    // por ejemplo: inicializar a DB
  });

  afterAll(() => {
    console.log('After all...');
  });

  test('Sample 1', () => {
    console.log('case 1');
    expect(2 + 2).toBe(4);
  });

  test('Sample 2', () => {
    expect(5 + 5).toBe(10);
    console.log('case 2');
  });

  describe('A testing nested group', () => {
    // nested beforeAll
    beforeAll(() => {
      console.log('Nested beforeAll (only beforeAll the nested describe)');
    });

    beforeEach(() => {
      console.log('Nested Before Each Test');
      // por ejemplo: inicializar a DB
    });

    afterAll(() => {
      console.log('After all...Nested');
    });

    test('Sample 3', () => {
      console.log('case 3');
      expect(2 + 3).toBe(5);
    });

    test('Sample 4', () => {
      console.log('case 4');
      expect(5 + 6).toBe(11);
    });
  });
});
