import express, { response } from "express";
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

// GET INVENTION BY ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const invention = await Invention.findById(id);

    return response(200).json(invention);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const invention = new Invention({
    inventionName: req.body.inventionName,
    inventor: req.body.inventor,
    country: req.body.country,
    year: req.body.year,
    category: req.body.category,
    image: req.body.image,
  });
  try {
    const newInvention = await invention.save();
    res.status(200).json(newInvention);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Invention.findByIdAndDelete(id);
    if (!result) {
      return response.status(400).json({ message: "Invention not found" });
    }
    return res.status(200).send({ message: "Invention deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.inventionName ||
      !req.body.inventor ||
      !req.body.country ||
      !req.body.year ||
      !req.body.category ||
      !req.body.image
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: Invention name, Inventor, year, category, country and image",
      });
    }
    const { id } = req.params;
    const result = await Invention.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(400).json({ message: "Invention not found" });
    }

    return res.status(200).send({ message: "Invention updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Invention by year 2014
router.get('/inventions', async (req, res) => {
  try {
    const startYear = '2014';
    const inventions = await Invention.find({ year: { $eq: startYear } });
    res.json(inventions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




export default router;
