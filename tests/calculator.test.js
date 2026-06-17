const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('../src/calculator');

test('add returns sum of two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('subtract returns difference of two numbers', () => {
  assert.strictEqual(subtract(5, 3), 2);
  assert.strictEqual(subtract(0, 5), -5);
});

test('multiply returns product of two numbers', () => {
  assert.strictEqual(multiply(3, 4), 12);
  assert.strictEqual(multiply(0, 5), 0);
});

test('divide returns quotient of two numbers', () => {
  assert.strictEqual(divide(10, 2), 5);
  assert.strictEqual(divide(9, 3), 3);
});

test('divide throws error when dividing by zero', () => {
  assert.throws(() => divide(10, 0), { message: 'Cannot divide by zero' });
});

test('remainder returns remainder of two numbers', () => {
  assert.strictEqual(remainder(10, 3), 1);
  assert.strictEqual(remainder(9, 3), 0);
});

test('remainder throws error when dividing by zero', () => {
  assert.throws(() => remainder(10, 0), { message: 'Cannot divide by zero' });
});