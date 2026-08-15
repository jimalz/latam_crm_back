<<<<<<< HEAD
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
const PORT = process.env.PORT;

=======
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import healthRoutes from "./src/routes/health.routes.js";

dotenv.config();

const app = express();
app.use("/health", healthRoutes);
app.use(cors());
app.use(express.json());

// Root route for Railway
app.get("/", (req, res) => {
  res.send("LATAM CRM Backend Running");
});

// Routes
app.use("/auth", authRoutes);

// Correct Railway port binding
const PORT = process.env.PORT || 4000;
>>>>>>> 122334b27932b5982b50ef533215c10ca6990352

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
<<<<<<< HEAD
=======




>>>>>>> 122334b27932b5982b50ef533215c10ca6990352
