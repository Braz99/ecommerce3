import React from "react";
import Header from "../../components/Header";
import MainCart from "../../components/MainCart";
import TotalValue from "../../components/TotalValue";
import "../../styles/cart.css";
import "../../styles/total-value.css";

export default function Cart() {
	return (
		<>
			<Header />
			<MainCart />
			<TotalValue />
		</>
	);
}
