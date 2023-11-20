import express, { request, response } from 'express';
import { Invention } from "../models/inventionsModel.js";

const router = express.Router()


  router.get("/", async (request, response) => {
    try{
      const inventions = await Invention.find({});
      return response.status(200).json({
        count: inventions.length,
        data: inventions,
      });
    }
    catch (error){
      console.log(error.message);
      response.status(500).send({ message: error.message})
    }
  });

  // GET inventions by ID
  router.get("/:id", async (request, response) => {
    try{
      const  { id } = request.params;
      const invention = await Invention.findById(id);

      return response.status(200).json(invention);
    }
    catch (error){
      console.log(error.message);
      response.status(500).send({ message: error.message})
    }
  })
  
  // LATEST INVENTIONS
  router.get("/inventionsByYear", async (req, res) => {
    const year = parseInt(req.query.year) || 2015;
    const limit = parseInt(req.query.limit) || 10;
    res.set("Access-Control-Allow-Origin", "*");
  
    try {
      const inventions = await Invention
        .find({ year: { $gte: year } })
        .limit(limit);
  
      return res.json(inventions);
    } catch (err) {
      console.error("Error fetching inventions by year:", err);
      return res
        .status(500)
        .json({ error: "Failed to fetch inventions by year" });
    }
  });

router.post("/inventions", async (req, res) => {
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
  
 router.put("/inventions/:id", async (req, res) => {
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
  