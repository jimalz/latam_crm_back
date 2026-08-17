import express from 'express';
import { healthCheck } from '../controllers/healthController.ts';

import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/customerController.js';

const router = express.Router();


router.get('/', getCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

router.get('/', healthCheck);

export default router;
