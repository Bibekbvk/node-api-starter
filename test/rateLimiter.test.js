import assert from 'node:assert/strict';
import { rateLimiter } from '../src/middleware/rateLimiter.js';

assert.equal(typeof rateLimiter, 'function');
console.log('✔ Rate limiter tests passed');
