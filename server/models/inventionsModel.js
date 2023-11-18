import mongoose from "mongoose";
const inventionSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    inventionName:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    inventor:{
        type: String,
        required: true,
    },
    year:{
        type: String,
        required: true,
    }
});

export const Invention = mongoose.model("inventions", inventionSchema);
