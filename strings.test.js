const { stringLength, reverseString, capitalizeFirstLetter } = require('./strings.js');

describe('running tests', () => {

  test('string length', () => {
    expect(stringLength('testing')).toBe(7);
  });

  test('string length zero', () => {
    expect(() => stringLength('')).toThrow('String size error');
  });

  test('string length higher than 10', () => {
    expect(() => stringLength('Specialized')).toThrow('String size error');
  });

  test('reverse string',() => {
    expect(reverseString('KAYAK')).toBe('KAYAK');
  });

  test('first test', () => {
    expect(capitalizeFirstLetter('hello')).toMatch('Hello');
  });

});
