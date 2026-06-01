import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    organization: 'Sri Eshwar Drone Tech',
    address: 'Kinathukadavu, Coimbatore-641202',
    contact: '+91 7418245899',
    email: 'dronetech@sece.ac.in',
    nextBatch: 'June-11, 16 2025',
    dgcaAuthorized: true
  });
});

export default router;
