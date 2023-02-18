import assert from 'node:assert/strict';
import { signToken, verifyToken } from '../src/services/token.service.js';

const token = signToken({ userId: 123, role: 'developer' }, 10);
const payload = verifyToken(token);
assert.equal(payload.userId, 123);
assert.equal(payload.role, 'developer');
console.log('✔ Token tests passed');
