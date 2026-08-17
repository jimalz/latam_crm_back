import { prisma } from "../prisma/prismaClient.ts";

// HEALTH CHECK
export const healthCheck = (req, res) => {
  res.json({ status: "ok", message: "latam_crm API is running" });
};

// GET /customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await prisma.customers.findMany({
      orderBy: { id: "asc" },
    });

    res.json(customers);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).send("Database error");
  }
};

// GET /customers/:id
export const getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await prisma.customers.findUnique({
      where: { id: Number(id) },
    });

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    res.json(customer);
  } catch (err) {
    console.error("Error fetching customer:", err);
    res.status(500).send("Database error");
  }
};

// POST /customers
export const createCustomer = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const customer = await prisma.customers.create({
      data: { name, email, phone },
    });

    res.json(customer);
  } catch (err) {
    console.error("Error creating customer:", err);
    res.status(500).send("Database error");
  }
};

// PUT /customers/:id
export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  try {
    const customer = await prisma.customers.update({
      where: { id: Number(id) },
      data: { name, email, phone },
    });

    res.json(customer);
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).send("Customer not found");
    }

    console.error("Error updating customer:", err);
    res.status(500).send("Database error");
  }
};

// DELETE /customers/:id
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await prisma.customers.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Customer deleted", customer });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(404).send("Customer not found");
    }

    console.error("Error deleting customer:", err);
    res.status(500).send("Database error");
  }
};
