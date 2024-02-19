import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(`/api/addProduct - ${error}`);
    res.status(400).json({ message: "Error saving product" });
  }
};
