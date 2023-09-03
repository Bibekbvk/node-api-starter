import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: Date.now() });
});

export default app;
import authRoutes from './routes/auth.routes.js';
app.use('/api/auth', authRoutes);
import { errorHandler } from './middleware/errorHandler.js';
app.use(errorHandler);
// Performance enhancement: disable x-powered-by header
app.disable('x-powered-by');
