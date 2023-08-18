const { MongoClient } = require("mongodb");
const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: 'https://who-invent-what.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(cors(corsOptions));
app.use(express.json());

const DB_User = encodeURIComponent("vankelvin603");
const Db_pass = encodeURIComponent('0546Van')
const uri = `mongodb+srv://${DB_User}:${Db_pass}@who-invent-what.wh0vdyz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);


let db; // Reference to the MongoDB database

async function connect(){
  db = client.db("Whoinventwhat");
  try{
    await client.connect(uri);
    console.log("Connected to MongoDb")
  } catch (error) {
    console.error(error);
  }

}
connect();

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
  const limit = parseInt(req.query.limit) || 10; // Default limit is set to 10, change as needed
  res.set('Access-Control-Allow-Origin', '*');

  try {
    const inventions = await db.collection("inventions")
      .find({ year: { $gte: year } })
      .limit(limit) // Apply the limit to the database query
      .toArray();

    return res.json(inventions);
  } catch (err) {
    console.error("Error fetching inventions by year:", err);
    return res.status(500).json({ error: "Failed to fetch inventions by year" });
  }
});


// app.get("/inventionsByYear",(req, res) => {
//   const year = req.query.year || 2015;
//   const sql = "SELECT * FROM inventions WHERE year >= ?";
//   db.query(sql, [year], (err, data) => {
//     if(err) return res.json(err);
//     return res.json(data);
//   });
// });

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