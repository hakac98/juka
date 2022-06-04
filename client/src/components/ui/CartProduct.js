import { useState } from "react";
import axios from "axios";
import { getUserId } from "../../features/User";

const CartProduct = ({ product, quantity }) => {
  const productId = product.id;
  const productName = product.name;
  const productDescription = product.description;
  const productImage = product.image;

  const [productQuantity, setProductQuantity] = useState(quantity);

  const decreaseQuantity = async (productId) => {
    if (productQuantity !== 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  const increaseQuantity = async (productId) => {
    if (productQuantity !== 10) {
      setProductQuantity(productQuantity + 1);
    }
  };
  const removeFromCart = () => {};
  return (
    <li className="border border-slate-150 flex rounded">
      <div className="w-full">
        <img className="w-full" src={productImage} alt="" />
      </div>
      <div className="grid gap-y-8 p-4">
        <div className="grid gap-y-4">
          <h1 className="font-medium text-xl">{productName}</h1>
          <p>{productDescription}</p>
        </div>
        <div className="flex gap-x-4 self-end">
          <div className="flex border border-slate-150 rounded">
            <button
              className="border-r border-slate-150 h-10 w-10"
              onClick={() => decreaseQuantity(productId)}
            >
              -
            </button>
            <div className="flex items-center justify-center w-10">
              {productQuantity}
            </div>
            <button
              className="border-l border-slate-150 h-10 w-10"
              onClick={() => increaseQuantity(productId)}
            >
              +
            </button>
          </div>
          <button
            className="border border-slate-150 font-medium h-10 rounded w-full"
            onClick={() => removeFromCart(productId)}
          >
            Ukloni iz korpe
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
