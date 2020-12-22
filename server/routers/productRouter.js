import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModule.js";

const productRouter = express.Router();

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const createdProducts = await Product.insertMany(data.products);
    resizeBy.send({ createdProducts });
  })
);

export default productRouter;
