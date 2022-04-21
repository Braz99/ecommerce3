import useProduct from "../hooks/useProduct";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/price-calculator.css";

export default function PriceCalculator({ productId, quantity }) {
  let { handleIncrease, handleDecrease } = useProduct();

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
