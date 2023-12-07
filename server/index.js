import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import inventionRoutes from "./routes/invention.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
  allowedHeaders: ["content-type"],
})
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Who Invent What");
});
app.use("/inventions", inventionRoutes)

mongoose
.connect(mongoDBURL)
.then(() =>{
  console.log("App connected to the database");
  app.listen(PORT, () => {
console.log(`App is listening to port: ${PORT}`);
  })
})




