import { getCart, setCart } from "../controllers/Cart.js";
import express from "express";
const router = express.Router();

router.get("/", getCart);
router.post("/", setCart);

export default router;
