class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    add(value) {
        this.currentValue += value;
        return this.currentValue;
    }

    subtract(value) {
        this.currentValue -= value;
        return this.currentValue;
    }

    multiply(value) {
        this.currentValue *= value;
        return this.currentValue;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.currentValue /= value;
        return this.currentValue;
    }

    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }

    getCurrentValue() {
        return this.currentValue;
    }
}

// Example usage:
const calculator = new Calculator();
console.log(calculator.add(10));       // 10
console.log(calculator.subtract(5));   // 5
console.log(calculator.multiply(3));   // 15
console.log(calculator.divide(5));     // 3
console.log(calculator.clear());       // 0
console.log(calculator.getCurrentValue()); // 0


const Calculator = require('./test.js');

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(`${message}: expected ${expected}, but got ${actual}`);
    }
}

function runTests() {
    let calculator = new Calculator();

    // Test add method
    calculator = new Calculator();
    assertEqual(calculator.add(10), 10, 'Add method failed');
    assertEqual(calculator.add(5), 15, 'Add method failed');

    // Test subtract method
    calculator = new Calculator();
    calculator.add(10);
    assertEqual(calculator.subtract(5), 5, 'Subtract method failed');

    // Test multiply method
    calculator = new Calculator();
    calculator.add(10);
    assertEqual(calculator.multiply(3), 30, 'Multiply method failed');

    // Test divide method
    calculator = new Calculator();
    calculator.add(10);
    assertEqual(calculator.divide(2), 5, 'Divide method failed');

    // Test divide by zero
    calculator = new Calculator();
    try {
        calculator.divide(0);
        throw new Error('Divide by zero did not throw an error');
    } catch (e) {
        if (e.message !== 'Cannot divide by zero') {
            throw new Error('Divide by zero threw the wrong error');
        }
    }

    // Test clear method
    calculator = new Calculator();
    calculator.add(10);
    assertEqual(calculator.clear(), 0, 'Clear method failed');

    // Test getCurrentValue method
    calculator = new Calculator();
    calculator.add(10);
    assertEqual(calculator.getCurrentValue(), 10, 'GetCurrentValue method failed');

    console.log('All tests passed!');
}

runTests();