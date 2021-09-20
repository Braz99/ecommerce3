import React from "react";
import { useDispatch } from "react-redux";
import deleteProduct from "../store/actions/deleteProduct";
import PriceCalculator from "./PriceCalculator";
import "../styles/cart.css";
import { FaTrashAlt } from "react-icons/fa";

export default function CartProduct({ product }) {
	const dispatch = useDispatch();

	function handleDeleteProduct() {
		dispatch(deleteProduct(product.id));
	}

	return (
		<li className="product-cart" id={product.id}>
			<img
				className="product-cart-image"
				src={`assets/${product.image}`}
				alt={product.image}
			/>

			<h2 className="product-cart-name">{product.name}</h2>

			<h3 className="product-cart-price">
				R$ {product.price.toFixed(2).replace(".", ",")}
			</h3>

			<PriceCalculator productId={product.id} quantity={product.quantity} />

			<button
				className="product-cart-button"
				onClick={() => handleDeleteProduct()}>
				Remover <FaTrashAlt />
			</button>
		</li>
	);
}
