import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import registerOrder from "../store/actions/registerOrder";

export default function TotalValue() {
	let { cart } = useSelector((state) => state);

	let dispatch = useDispatch();
	let value = cart.reduce((acc, act) => acc + act.price, 0);

	let history = useHistory();

	function handleCheckout() {
		if (cart.length === 0) {
			console.log("Carrinho vazio!!!!");
		} else {
			dispatch(registerOrder());
			history.push("/checkout");
		}
	}

	return (
		<div className="total-value">
			<div className="total">
				<h4>Total: </h4>
				<span className="value"> R$ {value.toFixed(2).replace(".", ",")}</span>
			</div>

			<button className="to-checkout-button" onClick={() => handleCheckout()}>
				Finalizar compra
			</button>
		</div>
	);
}
