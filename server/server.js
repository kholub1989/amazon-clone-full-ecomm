import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect("mongodb://localhost/amazon-clone-full-ecomm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready 😀 👨‍💻 ");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => {
  console.log(`Server is fire 🚀 on http://localhost:${port}`);
});
