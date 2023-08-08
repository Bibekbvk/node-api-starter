export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  jwtSecret: process.env.JWT_SECRET || 'dev-jwt-secret-key',
  corsOrigin: process.env.CORS_ORIGIN || '*'
};
