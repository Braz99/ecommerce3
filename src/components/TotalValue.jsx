import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import registerOrder from "../store/actions/registerOrder";

export default function TotalValue() {
  let { cart } = useSelector((state) => state);

  let dispatch = useDispatch();
  let value = cart.reduce((acc, act) => acc + act.price, 0);

  let history = useHistory();

  function handleCheckout() {
    if (cart.length === 0) {
      toast.warn("Carrinho vazio, compre algo!", { toastId: 0 });
    } else {
      dispatch(registerOrder());
      history.push("/checkout");
    }
  }

  return (
    <div className="total-value">
      <div className="total">
        <h4>Total: </h4>
        <span className="value"> R$ {value.toFixed(2).replace(".", ",")}</span>
      </div>

      <div className="to-checkout-button-div">
        <button className="to-checkout-button" onClick={() => handleCheckout()}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
