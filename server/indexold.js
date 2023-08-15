const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "whoinventwhat",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/", (req, res) => {
  return res.json("From server side");
}); 

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
// ADD USER AND AUTHENTICATE
app.post("/users", (req, res) => {
  const { fName, lName, email, userName, password } = req.body;

  const sqlSelect = "SELECT * FROM users WHERE email = ? OR userName = ?";
  db.query(sqlSelect, [email, userName], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to create account" });
    }

    if (result.length > 0) {
      // User with the same email or username already exists
      return res
        .status(409)
        .json({ error: "Email or username already exists" });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create account" });
      }

      const sqlInsert = `INSERT INTO users (fName, lName, email, userName, password) VALUES (?, ?, ?, ?, ?)`;
      const values = [fName, lName, email, userName, hashedPassword];

      db.query(sqlInsert, values, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Failed to create account" });
        }

        return res.json({ message: "Account created successfully" });
      });
    });
  });
});

// SIGNIN AUTHENTICATION
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const sqlSelect = "SELECT * FROM users WHERE email = ? OR userName = ?";
  db.query(sqlSelect, [userName, email], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to sign in" });
    }

    if (result.length === 0) {
      // User not found
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result[0];

    // Compare the provided password with the hashed password stored in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to sign in" });
      }

      if (!isMatch) {
        // Passwords do not match
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Authentication successful
      return res.json({ message: "Authentication successful", user });
    });
  });
});

app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/inventions", (req, res) => {
  const sql = "SELECT * FROM inventions";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// LATEST INVENTIONS

app.get("/inventionsByYear", (req, res) => {
  const year = req.query.year || 2015; // Default to the year 2000 if no year is provided in the query string
  const sql = "SELECT * FROM inventions WHERE year >= ?";
  db.query(sql, [year], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/inventions", (req, res) => {
  const { inventionName, inventor, year, category, country } = req.body;

  const sql = `INSERT INTO inventions (inventionName, inventor, year, category, country) VALUES (?, ?, ?, ?, ?)`;
  const values = [inventionName, inventor, year, category, country];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to submit invention data" });
    }

    return res.json({ message: "Invention data submitted successfully" });
  });
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
