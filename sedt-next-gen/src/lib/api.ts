// API utility for frontend to connect to backend with API key
type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const API_URL = 'http://localhost:4000/api';
const API_KEY = 'changeme-secret-key'; // Use env for production

export async function submitContact(payload: ContactPayload) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to submit contact');
  return res.json();
}
