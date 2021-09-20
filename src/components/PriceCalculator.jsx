import React from "react";
import { useDispatch } from "react-redux";
import updateProduct from "../store/actions/updateProduct";
import removeProduct from "../store/actions/removeProduct";

export default function PriceCalculator({ product }) {
	const dispatch = useDispatch();

	function handleIncrease(id) {
		dispatch(updateProduct(id));
	}

	function handleDecrease(id) {
		dispatch(removeProduct(id));
	}

	return (
		<div>
			<button
				className="product-button"
				onClick={() => handleIncrease(product.id)}>
				Adicionar ao carrinho
			</button>

			<h3 className="product-price">
				R$ {product.price.toFixed(2).replace(".", ",")}
			</h3>

			<button
				className="product-button"
				onClick={() => handleDecrease(product.id)}>
				Adicionar ao carrinho
			</button>
		</div>
	);
}
