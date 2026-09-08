import assert from 'node:assert';
import test from 'node:test';
import { sumar } from './index.js';

test('Suma dos números correctamente', () => {
  assert.strictEqual(sumar(2, 3), 5);
});
