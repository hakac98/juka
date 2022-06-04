import mongoose from "mongoose";
import conn from "../config/DB.js";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { collection: "categories" }
);

const Category = conn.main.model("Category", categorySchema);

export default Category;
