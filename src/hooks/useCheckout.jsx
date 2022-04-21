import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import registerOrder from "../store/actions/registerOrder";

export default function useCheckout() {
  let { cart } = useSelector((state) => state);

  let dispatch = useDispatch();

  let history = useHistory();

  function handleCheckout() {
    if (cart.length === 0) {
      toast.warn("Carrinho vazio, compre algo!", { toastId: 0 });
    } else {
      dispatch(registerOrder());
      history.push("/checkout");
    }
  }

  return {
    handleCheckout,
  };
}
