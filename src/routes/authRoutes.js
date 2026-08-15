<<<<<<< HEAD
import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
=======
import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
>>>>>>> 122334b27932b5982b50ef533215c10ca6990352

export default router;
