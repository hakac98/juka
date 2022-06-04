import axios from "axios";
import Category from "../models/Category.js";

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.status(200).json({ results: categories });
};

const setCategory = async (req, res) => {
  const name = req.body.name;
  await Product.create({
    _id: id,
    name: name,
  });
  res.status(200).json({ message: "Dodali ste kategoriju" });
};

export { getCategories, setCategory };
