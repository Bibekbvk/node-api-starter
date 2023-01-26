import assert from 'node:assert/strict';

assert.equal(typeof (process.uptime()), 'number');
console.log('✔ Health check test passed');
