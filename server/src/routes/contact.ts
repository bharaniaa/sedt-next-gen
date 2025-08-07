import { Router } from 'express';

const router = Router();

// In-memory storage for contact submissions
const contacts: any[] = [];

router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const submission = { name, email, phone, message, date: new Date() };
  contacts.push(submission);
  res.status(201).json({ success: true, submission });
});

router.get('/', (_req, res) => {
  res.json(contacts);
});

export default router;
