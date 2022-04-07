import React from "react";
import { useHistory } from "react-router-dom";
import MainCart from "../../components/MainCart";
import TotalValue from "../../components/TotalValue";
import "../../styles/cart.css";
import "../../styles/total-value.css";

export default function Cart() {
  let history = useHistory();
  return (
    <div className="layout-cart">
      <div className="info-cart" onClick={() => history.push("/")}>
        Voltar
      </div>
      <MainCart />
      <TotalValue />
    </div>
  );
}
