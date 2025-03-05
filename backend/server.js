import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const app = express();

app.use(express.json()); // allows us to select json data in the req.body

dotenv.config();

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send(req.params);
});

app.listen(5000, () => {
  connectDB();
  console.log("server started at http://localhost:5000");
});
