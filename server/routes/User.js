import express from "express";
const router = express.Router();
import { generateUser, registerUser, loginUser } from "../controllers/User.js";

router.post("/generate", generateUser);
router.post("/", registerUser);
router.post("/login", loginUser);

export default router;
