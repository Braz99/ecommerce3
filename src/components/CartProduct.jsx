import React from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import deleteProduct from "../store/actions/deleteProduct";
import removeProduct from "../store/actions/removeProduct";
import "../styles/cart.css";

export default function CartProduct({ product }) {
	const dispatch = useDispatch();

	function handleRemoveProduct() {
		dispatch(removeProduct(product.id));
	}

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

			<h3 className="product-cart-quantity">Quantidade: {product.quantity} </h3>

			<button
				className="product-cart-button"
				onClick={() => handleRemoveProduct()}>
				Diminuir quantidade
			</button>

			<button
				className="product-cart-button"
				onClick={() => handleDeleteProduct()}>
				Remover do carrinho
			</button>
		</li>
	);
}
