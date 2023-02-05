import crypto from 'node:crypto';

const SECRET_KEY = process.env.JWT_SECRET || 'vibe-secret-key-2023';

export function signToken(payload, expiresInSeconds = 3600) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const body = Buffer.from(JSON.stringify({ ...payload, exp })).toString('base64url');
  const signature = crypto.createHmac('sha256', SECRET_KEY).update(`${header}.${body}`).digest('base64url');
  return `${header}.${body}.${signature}`;
}

export function verifyToken(token) {
  if (!token) throw new Error('Token required');
  const [header, body, signature] = token.split('.');
  const expectedSig = crypto.createHmac('sha256', SECRET_KEY).update(`${header}.${body}`).digest('base64url');
  if (signature !== expectedSig) throw new Error('Invalid token signature');
  const data = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  if (data.exp && data.exp < Math.floor(Date.now() / 1000)) throw new Error('Token expired');
  return data;
}
