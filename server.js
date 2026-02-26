const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/routes-api");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/product-db")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});