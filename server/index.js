
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb"); // Import MongoClient from the MongoDB driver

const app = express();
app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://vankelvin603:0546Van@who-invent-what.wh0vdyz.mongodb.net/?retryWrites=true&w=majority'; // MongoDB URI
const client = new MongoClient(uri);

let db; // Reference to the MongoDB database

// Connect to the database
client.connect(err => {
  if (err) {
    console.error("Failed to connect to the database:", err);
    return;
  }
  console.log("Connected to MongoDB");
  
  // Specify the database you want to use
  db = client.db("whoinventwhat");
});

app.get("/", (req, res) => {
  return res.json("From server side");
});

app.get("/users", async (req, res) => {
  try {
    const users = await db.collection("users").find().toArray();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
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

// ... Rest of your routes ...

app.listen(8080, () => {
  console.log("Running on port 8080");
});
