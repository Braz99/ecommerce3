import useCartInformation from "../hooks/useCartInformation";

export default function CartInformation() {
  let { history, itemsQuantityInfo } = useCartInformation();

  return (
    <div className="cart-info">
      <i className="cart-info-icon-back" onClick={() => history.push("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </i>

      <span className="cart-total-items">{itemsQuantityInfo}</span>
    </div>
  );
}
