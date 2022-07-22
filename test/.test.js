const a = true
const b = true

describe('Test', () => {
  test('Test a and b', () => {
    expect(a).toEqual(b);
  });
});

describe('Test 2', () => {
  test('Test a and b', () => {
    expect(b).toEqual(a);
  });
});
