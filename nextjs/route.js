// pages/api/register.js
import { query } from '../../db'; // Adjust path if necessary
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert user into the database
    try {
      const result = await query(
        'INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *',
        [username, passwordHash, email]
      );

      return res.status(201).json(result.rows[0]); // Return the newly created user
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

