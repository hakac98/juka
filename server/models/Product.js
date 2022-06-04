import mongoose from "mongoose";
import conn from "../config/DB.js";

const productSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    category: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { collection: "products" }
);

productSchema.query.byId = function (id) {
  if (id) {
    return this.where({ _id: id });
  }
  return this;
};

productSchema.query.byCategory = function (category) {
  if (category) {
    return this.where({ category: category });
  }
  return this;
};

const Product = conn.main.model("Product", productSchema);

export default Product;
