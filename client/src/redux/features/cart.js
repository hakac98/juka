import { useDispatch } from "react-redux";
import { cartSet } from "../reducers/cart";

function CartFeature(items) {
  const dispatch = useDispatch();
  dispatch(cartSet(items));
}

export default CartFeature;
