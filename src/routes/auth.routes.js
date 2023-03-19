import { Router } from 'express';
import { signToken } from '../services/token.service.js';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  const token = signToken({ email, id: 'usr_1' });
  res.json({ token, user: { email, name: 'Bibek Bhattara' } });
});

export default router;
