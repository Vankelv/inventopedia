import mongoose from "mongoose";
const inventionSchema = new mongoose.Schema({
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

const Invention = mongoose.model("Invention", inventionSchema);

export default Invention;
