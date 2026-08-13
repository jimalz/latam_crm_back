import express from 'express';
import cors from 'cors';
import pool from './src/db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});



/* ⭐⭐ INSERT STEP 5 CODE RIGHT HERE ⭐⭐ */

// Example: Get all customers
/*
app.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});
*/

// Example: Insert a customer
/* 
app.post('/customers', async (req, res) => {
  const { name, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});
*/

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
