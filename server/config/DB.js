import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose.main = mongoose.createConnection(process.env.MAIN_DB);

export default mongoose;
