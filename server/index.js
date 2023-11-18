import express, { response } from "express";
import { PORT, mongoDBURL } from "./config";
import mongoose from "mongoose";
import inventionsRoute from "./routes/inventionsRoute";
const express = require("express");
const cors = require("cors");

const app = express();
// const corsOptions = {
//   origin: ["https://who-invent-what-vankelv.vercel.app/", "http://172.20.10.5:5173"],
//   methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
//   credentials: true,
// };


app.use(cors({
  origin: "https://who-invent-what-vankelv.vercel.app/", "http://localhost:5173",
  methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
  allowedHeaders: ["content-type"],
})
);

app.use(express.json());

app.use(cors(corsOptions));
app.use(express.json());


mongoose
.connect(mongoDBURL)
.then(() =>{
  console.log("App connected to the database");
  app.listen(PORT, () => {
console.log(`App is listening to port: ${PORT}`);
  })
})




