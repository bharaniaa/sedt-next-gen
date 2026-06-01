import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact';
import enrollRoutes from './routes/enroll';
import infoRoutes from './routes/info';
import { apiKeyAuth } from './middleware/apiKeyAuth';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/contact', apiKeyAuth, contactRoutes);
app.use('/api/enroll', apiKeyAuth, enrollRoutes);
app.use('/api/info', apiKeyAuth, infoRoutes);

app.get('/', (_req, res) => {
  res.send('SEDT Backend API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
