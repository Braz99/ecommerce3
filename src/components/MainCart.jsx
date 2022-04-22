import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

export default function MainCart() {
  const { cart } = useSelector((state) => state);

  const CartProduct = lazy(() => import("./CartProduct"));

  return (
    <ul className="cart-list">
      <Suspense fallback={<div>Loading...</div>}>
        {cart.map((product, index = product.id) => (
          <CartProduct key={index} product={product} />
        ))}
      </Suspense>
    </ul>
  );
}
