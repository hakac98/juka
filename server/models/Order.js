import mongoose from "mongoose";
import conn from "../config/DB.js";

const orderSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    user_id: {
      type: Array,
      ref: "User",
    },
    products: {
      type: Array,
      ref: "Product",
    },
  },
  { collection: "orders" }
);

const Order = conn.main.model("Order", orderSchema);

export default Order;
