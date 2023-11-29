import mongoose from "mongoose";
const inventionSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  inventionName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  inventor: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

export const Invention = mongoose.model("Inventions", inventionSchema);
