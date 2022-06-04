import { getCategories, setCategory } from "../controllers/Category.js";
import express from "express";
const router = express.Router();

router.get("/", getCategories);
router.post("/", setCategory);

export default router;
