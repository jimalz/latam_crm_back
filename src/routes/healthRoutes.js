<<<<<<< HEAD
import express from 'express';
import { healthCheck } from '../controllers/healthController.js';

const router = express.Router();

router.get('/', healthCheck);
=======
import { Router } from "express";
import { healthCheck } from "../controllers/health.controller.js";

const router = Router();

router.get("/", healthCheck);
>>>>>>> 122334b27932b5982b50ef533215c10ca6990352

export default router;
