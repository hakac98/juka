import User from "../models/User.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

const getUID = async (req, res) => {
  var UID, isRecord;
  var isUID = false;
  const collection = req.body.collection;
  while (!isUID) {
    UID = await createUID();
    if (collection === "users") {
      isRecord = await User.exists({ _id: UID });
    }
    if (collection === "carts") {
      isRecord = await Cart.exists({ _id: UID });
    }
    if (collection === "products") {
      isRecord = await Product.exists({ _id: UID });
    }

    if (!isRecord) {
      isUID = true;
    }
  }
  res.status(200).json({ id: UID });
};

async function createUID() {
  var UID = "";
  const characters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 10; i++) {
    UID += characters.charAt(Math.floor(Math.random() * characters.length - 1));
  }
  return UID;
}

export default getUID;
