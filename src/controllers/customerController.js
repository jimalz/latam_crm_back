import pool from '../db.js';

// GET /customers
export const getCustomers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customers ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching customers:', err);
    res.status(500).send('Database error');
  }
};

// GET /customers/:id
export const getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).send('Customer not found');
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching customer:', err);
    res.status(500).send('Database error');
  }
};

// POST /customers
export const createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO customers (name, email, phone)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, phone]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error creating customer:', err);
    res.status(500).send('Database error');
  }
};

// PUT /customers/:id
export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const result = await pool.query(
      `UPDATE customers
       SET name = $1, email = $2, phone = $3
       WHERE id = $4
       RETURNING *`,
      [name, email, phone, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Customer not found');
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating customer:', err);
    res.status(500).send('Database error');
  }
};

// DELETE /customers/:id
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM customers WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Customer not found');
    }

    res.json({ message: 'Customer deleted', customer: result.rows[0] });
  } catch (err) {
    console.error('Error deleting customer:', err);
    res.status(500).send('Database error');
  }
};
