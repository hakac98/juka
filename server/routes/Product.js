import { getProduct, getProducts, setProduct } from "../controllers/Product.js";
import express from "express";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", setProduct);

export default router;
