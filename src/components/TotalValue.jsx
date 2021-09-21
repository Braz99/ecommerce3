import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function TotalValue() {
	let { cart } = useSelector((state) => state);

	let value = cart.reduce((acc, act) => acc + act.price, 0);

	let history = useHistory();

	function handleCheckout() {
		if (cart.length === 0) {
			console.log("Carrinho vazio!!!!");
		} else {
			history.push("/checkout");
		}
	}

	return (
		<div className="total-value">
			<div className="total">
				<h4>Total: </h4>
				<span className="value"> R$ {value.toFixed(2).replace(".", ",")}</span>
			</div>

			<button className="checkout-button" onClick={() => handleCheckout()}>
				Finalizar compra
			</button>
		</div>
	);
}
