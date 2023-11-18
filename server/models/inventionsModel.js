import mongoose from "mongoose";
const inventionSchema = mongoose.Schema({
  inv,
});

export const Invention = mongoose.model("inventions", inventionSchema);
