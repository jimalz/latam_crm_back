import express from 'express';
import cors from 'cors';
import pool from './src/db.js';

// ⭐ Add your routes
import customerRoutes from './src/routes/customerRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

// Add more as needed


import healthRoutes from './src/routes/healthRoutes.js';
app.use('/health', healthRoutes);

const app = express();
app.use(cors());
app.use(express.json());

// ⭐ Use your routes
app.use('/customers', customerRoutes);
app.use('/users', userRoutes);
