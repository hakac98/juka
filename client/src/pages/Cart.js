import { useState, useEffect } from "react";
import axios from "axios";
import CartProduct from "../components/ui/CartProduct";
import Section from "../components/ui/Section";
import { getUserId } from "../features/User";

const Cart = () => {
  const [cart, setCart] = useState(null);
  useEffect(() => {
    const getCart = async () => {
      const userId = getUserId();
      const productsRequest = await axios.get(
        "http://localhost:5000/api/cart/",
        {
          user_id: userId,
        }
      );
      const cart = productsRequest.data.result[0].products;
      setCart(cart);
    };
    getCart();
  }, []);
  return (
    <Section>
      <ul className="grid gap-y-8">
        {cart &&
          cart.map((product) => {
            const productInfo = product._id;
            const productQuantity = product.quantity;
            return (
              <CartProduct product={productInfo} quantity={productQuantity} />
            );
          })}
      </ul>
    </Section>
  );
};

export default Cart;
