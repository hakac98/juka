import mongoose from "mongoose";
import conn from "../config/DB.js";

const cartSchema = mongoose.Schema(
  {
    _id: {
      type: String,
    },
    user_id: {
      type: String,
      ref: "User",
    },
    products: [
      {
        _id: {
          type: String,
          ref: "Product",
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  { collection: "carts" }
);

cartSchema.query.byUserId = function (user_id) {
  if (user_id) {
    return this.where({ user_id: user_id });
  }
  return this;
};

const Cart = conn.main.model("Cart", cartSchema);

export default Cart;
