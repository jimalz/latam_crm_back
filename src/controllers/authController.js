<<<<<<< HEAD
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db.js";

console.log("AUTH CONTROLLER LOADED");


// REGISTER USER
export const register = async (req, res) => {
  console.log("BODY RECEIVED:", req.body);
  console.log("HEADERS:", req.headers);
    
    
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await db.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    // if user exists, return error 
    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        error: "Email already registered"
      });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Insert user new user into database
    const result = await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashed]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN USER
=======
import pool from "../db/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

>>>>>>> 122334b27932b5982b50ef533215c10ca6990352
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
<<<<<<< HEAD
    // Find user
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
=======
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await pool.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
>>>>>>> 122334b27932b5982b50ef533215c10ca6990352
    }

    const user = result.rows[0];

<<<<<<< HEAD
    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Create JWT
=======
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ message: "Invalid password" });
    }

>>>>>>> 122334b27932b5982b50ef533215c10ca6990352
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
<<<<<<< HEAD
    res.status(500).json({ error: err.message });
=======
    console.error(err);
    res.status(500).json({ message: "Server error" });
>>>>>>> 122334b27932b5982b50ef533215c10ca6990352
  }
};
