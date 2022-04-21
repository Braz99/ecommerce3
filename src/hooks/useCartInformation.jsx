import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function useCartInformation() {
  let history = useHistory();

  let { cart } = useSelector((state) => state);

  let cartItems =
    cart.length > 0 ? cart.reduce((prev, item) => prev + item?.quantity, 0) : 0;

  let itemsValueTotal = cart.reduce((acc, act) => acc + act.price, 0);

  let itemsQuantityInfo =
    cartItems === 0
      ? "Nenhum item"
      : cartItems === 1
      ? `${cartItems} item`
      : `${cartItems} itens`;

  return {
    history,
    cartItems,
    itemsValueTotal,
    itemsQuantityInfo,
  };
}
