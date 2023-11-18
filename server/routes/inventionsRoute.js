import { Express } from "express";
import { Invention } from "../models/inventionsModel";

const router = Express.Router()


router.get("/", (req, res) => {
    return res.json({ message: "From server side" });
  });
  
  router.get("/users", async (req, res) => {
    try {
      const users = await db.collection("users").find().toArray();
      return res.json(users);
    } catch (err) {
      return res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  
  router.get("/categories", async (req, res) => {
    try {
      const categories = await db.collection("categories").find().toArray();
      return res.json(categories);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to fetch categories" });
    }
  });
  router.get("/inventions", async (req, res) => {
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
  router.get("/inventionsByYear", async (req, res) => {
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

  export default router;
  