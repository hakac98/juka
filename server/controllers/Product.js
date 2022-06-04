import axios from "axios";
import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  const category = req.body.category;
  const products = await Product.find().byCategory(category);
  res.status(200).json({ results: products });
};

const getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.find().byId(id);
  res.status(200).json({ results: products });
};

const setProduct = async (req, res) => {
  const uidResponse = await axios.get(
    "http://localhost:5000/api/uid?collection=products"
  );
  const id = uidResponse.data.id;
  const category = req.body.category;
  const name = req.body.name;
  const price = req.body.price;
  const image = req.body.image;
  await Product.create({
    _id: id,
    category: category,
    name: name,
    price: price,
    image: image,
  });
  res.status(200).json({ message: "Dodali ste proizvod" });
};

export { getProduct, getProducts, setProduct };
