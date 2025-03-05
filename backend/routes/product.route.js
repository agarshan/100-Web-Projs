import express from "express";

import {
  getAllProducts,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);

router.post("/", updateProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", createProduct);

export default router;
