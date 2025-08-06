import { Request, Response, NextFunction } from 'express';

const API_KEY = process.env.API_KEY || 'changeme-secret-key';

export function apiKeyAuth(req: Request, res: Response, next: NextFunction) {
  const key = req.headers['x-api-key'];
  if (!key || key !== API_KEY) {
    return res.status(401).json({ error: 'Invalid or missing API key' });
  }
  next();
}
