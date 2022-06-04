import axios from "axios";
import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

const cartExists = async (userId) => {
  return await Cart.exists({ user_id: userId });
};

const cartProductExists = async (userId, productId) => {
  return await Cart.exists({
    user_id: userId,
    "products._id": productId,
  });
};

const getCart = async (req, res) => {
  const user_id = req.body.user_id;
  const cart = await Cart.find()
    .byUserId(user_id)
    .populate({ path: "products._id", model: Product });
  res.status(200).json({ result: cart });
};

const setCart = async (req, res) => {
  const userId = req.body.user_id;
  const userCart = await cartExists(userId);
  const productId = req.body.product_id;
  const productQuantity = req.body.product_quantity;
  console.log(productId, productQuantity);
  if (userCart) {
    const userCartProduct = await cartProductExists(userId, productId);
    if (userCartProduct) {
      await Cart.findOneAndUpdate(
        {
          user_id: userId,
          "products._id": productId,
        },
        {
          $set: {
            "products.$.quantity": productQuantity,
          },
        }
      );
    } else {
      await Cart.findOneAndUpdate(
        { user_id: userId },
        {
          $push: {
            products: [{ _id: productId, quantity: productQuantity }],
          },
        }
      );
    }
  } else {
    const idResponse = await axios.get("http://localhost:5000/api/uid", {
      collection: "carts",
    });
    const id = idResponse.data.id;
    await Cart.create({
      _id: id,
      user_id: userId,
      products: [{ _id: productId, quantity: productQuantity }],
    });
  }
  res.status(200).json({ message: "Dodali ste proizvod" });
};

export { getCart, setCart };
