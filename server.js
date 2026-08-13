import express from 'express';
import cors from 'cors';
import pool from './src/db.js';

// ROUTES
import healthRoutes from './src/routes/healthRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import customerRoutes from './src/routes/customerRoutes.js';

// INIT APP
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/health', healthRoutes);
app.use('/users', userRoutes);
app.use('/customers', customerRoutes);

// TEST ROUTE
app.get('/test', (req, res) => {
  res.send('API running');
});

// START SERVER
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
