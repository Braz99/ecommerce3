import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function MainCart() {
  const { cart } = useSelector((state) => state);

  return (
    <ul className="cart-list">
      {cart.map((product, index = product.id) => (
        <CartProduct key={index} product={product} />
      ))}
    </ul>
  );
}
