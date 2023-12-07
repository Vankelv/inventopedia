import express from 'express';
const router = express.Router();
import Invention from "../models/inventions.js";

router.get("/", async (req, res) => {
  try {
    const inventions = await Invention.find();
    res.json(inventions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const invention = new Invention({
    inventionName: req.body.invention,
    inventor: req.body.inventor,
    country: req.body.country,
    year: req.body.year,
    category: req.body.category,
  });
  try {
    const newInvention = await invention.save();
    res.status(200).json(newInvention);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
