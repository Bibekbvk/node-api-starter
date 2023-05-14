const requestCounts = new Map();

export function rateLimiter(limit = 100, windowMs = 60000) {
  return (req, res, next) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const clientData = requestCounts.get(ip) || { count: 0, resetTime: now + windowMs };

    if (now > clientData.resetTime) {
      clientData.count = 1;
      clientData.resetTime = now + windowMs;
    } else {
      clientData.count++;
    }

    requestCounts.set(ip, clientData);
    if (clientData.count > limit) {
      return res.status(429).json({ error: 'Too many requests, please try again later.' });
    }
    next();
  };
}
