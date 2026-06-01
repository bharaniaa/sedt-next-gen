import { Router } from 'express';

const router = Router();

// In-memory storage for enrollments
const enrollments: any[] = [];

router.post('/', (req, res) => {
  const { name, email, phone, batch } = req.body;
  if (!name || !email || !batch) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const enrollment = { name, email, phone, batch, date: new Date() };
  enrollments.push(enrollment);
  res.status(201).json({ success: true, enrollment });
});

router.get('/', (_req, res) => {
  res.json(enrollments);
});

export default router;
