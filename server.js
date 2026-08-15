import express from 'express';
import cors from 'cors';

// ROUTES
import healthRoutes from './src/routes/healthRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import customerRoutes from './src/routes/customerRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

// INIT APP
const app = express();

console.log("SERVER STARTED");




// MIDDLEWARE
app.use(cors());
app.use(express.json());
console.log("JSON middleware loaded");


// ROUTES
app.use('/auth', authRoutes);

console.log("AUTH ROUTES LOADED");

app.use('/health', healthRoutes);
app.use('/users', userRoutes);
app.use('/customers', customerRoutes);

// ROOT ROUTE
app.get('/', (req, res) => {
  res.send('latam_crm API is running');
});

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
