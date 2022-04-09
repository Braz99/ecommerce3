import React from "react";
import CartInformation from "../../components/CartInformation";
import MainCart from "../../components/MainCart";
import TotalValue from "../../components/TotalValue";
import "../../styles/cart.css";
import "../../styles/total-value.css";
import "../../styles/cart-info.css";

export default function Cart() {
  return (
    <div className="layout-cart">
      <CartInformation />
      <MainCart />
      <TotalValue />
    </div>
  );
}
