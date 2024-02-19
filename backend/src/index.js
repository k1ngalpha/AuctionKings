import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "../src/routes/productRoute.js";
dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"));

app.use("/api", productRouter);

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
