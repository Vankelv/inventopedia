const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const corsOptions = {
  origin: ["https://who-invent-what.vercel.app", "http://172.20.10.5:5173"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
const DB_User = encodeURIComponent(process.env.DB_USER);
const Db_pass = encodeURIComponent(process.env.DB_PASS);
const uri = `mongodb+srv://${DB_User}:${Db_pass}@who-invent-what.wh0vdyz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

let db; // Reference to the MongoDB database 

async function connect() {
  db = client.db("Whoinventwhat");
  try {
    await client.connect(uri);
    console.log("Connected to MongoDb");
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
    res.set("Access-Control-Allow-Origin", "*"); // Change 'response' to 'res'
    return res.json(inventions);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to fetch inventions from MongoDB" });
  }
});

// LATEST INVENTIONS
app.get("/inventionsByYear", async (req, res) => {
  const year = parseInt(req.query.year) || 2015;
  const limit = parseInt(req.query.limit) || 10; // Default limit is set to 10, change as needed
  res.set("Access-Control-Allow-Origin", "*");

  try {
    const inventions = await db
      .collection("inventions")
      .find({ year: { $gte: year } })
      .limit(limit)
      .toArray();

    return res.json(inventions);
  } catch (err) {
    console.error("Error fetching inventions by year:", err);
    return res
      .status(500)
      .json({ error: "Failed to fetch inventions by year" });
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

//Invention actions. Delete and Edit

app.put("/inventions/:id", async (req, res) => {
  const inventionId = req.params.id;
  const { inventionName, inventor, year, category, country } = req.body;

  try {
    const result = await db.collection("inventions").updateOne(
      { _id: ObjectId(inventionId) }, // Use 'ObjectId' correctly
      {
        $set: {
          inventionName,
          inventor,
          year,
          category,
          country,
        },
      }
    );

    if (result.matchedCount === 1) {
      return res.json({ message: "Invention updated successfully" });
    } else {
      return res.status(404).json({ error: "Invention not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to update invention" });
  }
});

// app.delete("/inventions/:id", async (req, res) => {
//   const inventionId = req.params.id;

//   try {
//     const result = await db
//       .collection("inventions")
//       .deleteOne({ _id: ObjectId(inventionId) });

//     if (result.deletedCount === 1) {
//       return res.json({ message: "Invention deleted successfully" });
//     } else {
//       return res.status(404).json({ error: "Invention not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "Failed to delete invention" });
//   }
// });

app.delete('/inventions/:id', (req, res) => {
  if(ObjectId.isValid(re.params.id)){
    db.collection('inventions')
    .deleteOne({_id: ObjectId(req.params.id)})
    .then(result=> {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({error: 'Could not delete the invention'})
    })
  }
  else {
    res.status(500).json({error: 'Not a valid inventions id'})
  }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
