import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import removeProduct from "../store/actions/removeProduct";
import updateProduct from "../store/actions/updateProduct";
import "../styles/price-calculator.css";

export default function PriceCalculator({ productId, quantity }) {
  const dispatch = useDispatch();

  function handleIncrease(id) {
    dispatch(updateProduct(id));
  }

  function handleDecrease(id) {
    dispatch(removeProduct(id));
  }

  return (
    <div className="price-calculator">
      <button className="plus-button" onClick={() => handleIncrease(productId)}>
        <FaPlus />
      </button>

      <span className="product-quantity">{quantity}</span>

      <button
        className="minus-button"
        onClick={() => handleDecrease(productId)}
      >
        <FaMinus />
      </button>
    </div>
  );
}
