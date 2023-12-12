import mongoose from "mongoose";
const inventionSchema = new mongoose.Schema({
  inventionName: {
    type: String,
    required: true,
  },
  inventor: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
  }

});

const Invention = mongoose.model("Invention", inventionSchema);

export default Invention;
