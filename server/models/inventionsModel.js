import mongoose from "mongoose";
const inventionSchema = mongoose.Schema({
});

export const Invention = mongoose.model("inventions", inventionSchema);
