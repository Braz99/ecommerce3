import useCartInformation from "../hooks/useCartInformation";
import useCheckout from "../hooks/useCheckout";

export default function TotalValue() {
  let { handleCheckout } = useCheckout();
  let { itemsValueTotal } = useCartInformation();

  return (
    <div className="total-value">
      <div className="total">
        <h4>Total: </h4>
        <span className="value">
          R$ {itemsValueTotal.toFixed(2).replace(".", ",")}
        </span>
      </div>

      <div className="to-checkout-button-div">
        <button className="to-checkout-button" onClick={() => handleCheckout()}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
