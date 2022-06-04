import axios from "axios";
import { useState } from "react";
import { getUserId } from "../../features/User";

const Product = ({ product }) => {
  const productId = product._id;
  const productName = product.name;
  const productDescription = product.description;
  const productImage = product.image;
  const productPrice = product.price;

  const [productQuantity, setProductQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (productQuantity !== 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  const increaseQuantity = () => {
    if (productQuantity !== 10) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const addToCart = async () => {
    const userId = await getUserId();
    await axios.post("http://localhost:5000/api/cart/", {
      user_id: userId,
      product_id: productId,
      product_quantity: productQuantity,
    });
  };
  return (
    <li className="border border-slate-150 grid rounded">
      <div className="w-full">
        <img className="w-full" src={productImage} alt="" />
      </div>
      <div className="grid gap-y-8 p-4">
        <div className="grid gap-y-4">
          <h1 className="font-medium text-xl">{productName}</h1>
          <p>{productDescription}</p>
          <span className="text-lg">Cena: {productPrice}RSD</span>
        </div>
        <div className="grid gap-y-4 self-end">
          <div className="flex border border-slate-150 rounded">
            <button
              className="border-r border-slate-150 h-10 w-10"
              onClick={() => decreaseQuantity()}
            >
              -
            </button>
            <div className="flex items-center justify-center flex-1">
              {productQuantity}
            </div>
            <button
              className="border-l border-slate-150 h-10 w-10"
              onClick={() => increaseQuantity()}
            >
              +
            </button>
          </div>
          <button
            className="font-bold h-10 bg-lime-600 rounded text-white w-full"
            onClick={() => addToCart()}
          >
            Dodaj u korpu
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
