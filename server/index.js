const { MongoClient } = require("mongodb");
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const corsOptions = {
  origin: 'https://who-invent-what-81au.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const uri = process.env.MONGODB_URI;
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
  return res.json({ message: "From server side" });
});


app.get("/users", async (req, res) => {
  try {
    const users = await db.collection("users").find().toArray();
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/categories", async (req, res) => {
  try {
    const categories = await db.collection("categories").find().toArray();
    return res.json(categories);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch categories" });
  }
});
app.get("/inventions", async (req, res) => {
  try {
    const inventions = await db.collection("inventions").find().toArray();
    res.set('Access-Control-Allow-Origin', '*'); // Change 'response' to 'res'
    return res.json(inventions);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch inventions from MongoDB" });
  }
});

// LATEST INVENTIONS

app.get("/inventionsByYear", async (req, res) => {
  const year = parseInt(req.query.year) || 2015; 
  res.set('Access-Control-Allow-Origin', '*'); // Change 'response' to 'res'
  
  try {
    const inventions = await db.collection("inventions").find({ year: { $gte: year } }).toArray();
    return res.json(inventions);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch inventions by year" });
  }
});



app.post("/inventions", async (req, res) => {
  const { inventionName, inventor, year, category, country } = req.body;

  try {
    const result = await db.collection("inventions").insertOne({
      inventionName,
      inventor,
      year,
      category,
      country,
    });

    if (result.insertedCount === 1) {
      return res.json({ message: "Invention data submitted successfully" });
    } else {
      return res.status(500).json({ error: "Failed to submit invention data" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to submit invention data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});