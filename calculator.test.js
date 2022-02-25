const Calculator = require('./calculator.js');

describe('Calculator operations', () => {

  describe('Sum', () => {
    test('SumA', () => {
      let calc = new Calculator();
      result = calc.add(2, 2);
      expect(result).toBe(4);
    });
    test('SumB', () => {
      let calc = new Calculator();
      result = calc.add(1000, 2);
      expect(result).toBe(1002);
    });
    test('SumC', () => {
      let calc = new Calculator();
      result = calc.add(1972, 50);
      expect(result).toBe(2022);
    });
  });

  describe('Subtract', () => {
    test('SubtractA', () => {
      let calc = new Calculator();
      result = calc.subtract(2, 2);
      expect(result).toBe(0);
    });
    test('SubtractB', () => {
      let calc = new Calculator();
      result = calc.subtract(1000, 2);
      expect(result).toBe(998);
    });
    test('SubtractC', () => {
      let calc = new Calculator();
      result = calc.subtract(1972, 50);
      expect(result).toBe(1922);
    });
  });

  describe('divide', () => {
    test('divideA', () => {
      let calc = new Calculator();
      result = calc.divide(2, 2);
      expect(result).toBe(1);
    });
    test('divideB', () => {
      let calc = new Calculator();
      result = calc.divide(1000, 2);
      expect(result).toBe(500);
    });
    test('divideC', () => {
      let calc = new Calculator();
      result = calc.divide(1972, 50);
      expect(result).toBe(39.44);
    });
  });

  describe('multiply', () => {
    test('multiplyA', () => {
      let calc = new Calculator();
      result = calc.multiply(2, 2);
      expect(result).toBe(4);
    });
    test('multiplyB', () => {
      let calc = new Calculator();
      result = calc.multiply(1000, 2);
      expect(result).toBe(2000);
    });
    test('multiplyC', () => {
      let calc = new Calculator();
      result = calc.multiply(1972, 50);
      expect(result).toBe(98600);
    });
  });
});