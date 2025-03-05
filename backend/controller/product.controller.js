import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getAllProducts = async (req, res) => {
  const products = await Product.find({});

  try {
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in create product:", error.messgae);
    res.status(500).json({ success: false, messgae: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image)
    return res
      .status(400)
      .json({ success: false, messgae: "please provide all fields" });

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in create product:", error.messgae);
    res.status(500).json({ success: false, messgae: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log(deletedProduct);
    res.status(200).json({ success: true, messgae: "Product Deleted" });
  } catch (error) {
    res.status(404).json({ success: false, messgae: "Product not found" });
  }
};

export const createProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, messgae: "Invalid Product Id" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(404).json({ success: false, messgae: "Product not found" });
  }
};
