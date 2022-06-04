import getUID from "../controllers/UID.js"
import express from "express"
const router = express.Router()

router.get("/", getUID)

export default router