import express from "express";
import cors from "cors";
import UID from "./routes/UID.js";
import User from "./routes/User.js";
import Category from "./routes/Category.js";
import Product from "./routes/Product.js";
import Cart from "./routes/Cart.js";
import Order from "./routes/Order.js";

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/uid", UID);
app.use("/api/users", User);
app.use("/api/categories", Category);
app.use("/api/products", Product);
app.use("/api/cart", Cart);
app.use("/api/orders", Order);

app.listen(port, () => console.log(`Server sluša na port ${port}`));
