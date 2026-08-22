import { Router } from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerController.js";

const router = Router();

router.get("/", verifyToken, getCustomers);
router.get("/:id", verifyToken, getCustomerById);
router.post("/", verifyToken, createCustomer);
router.put("/:id", verifyToken, updateCustomer);
router.delete("/:id", verifyToken, deleteCustomer);

export default router;
