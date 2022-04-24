import { lazy, Suspense } from "react";
import CartInformation from "../../components/CartInformation";
import TotalValue from "../../components/TotalValue";
import Loader from "../../components/Loader";
import "../../styles/cart.css";
import "../../styles/total-value.css";
import "../../styles/cart-info.css";

export default function Cart() {
  let MainCart = lazy(() => import("../../components/MainCart"));

  return (
    <div className="layout-cart">
      <CartInformation />
      <Suspense fallback={<Loader className="loader-cart" />}>
        <MainCart />
      </Suspense>
      <TotalValue />
    </div>
  );
}
