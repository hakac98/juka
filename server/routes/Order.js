import { getOrders, setOrder } from "../controllers/Order.js";
import express from "express";
const router = express.Router();

router.get("/", getOrders);
router.post("/", setOrder);

export default router;
