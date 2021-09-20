import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
	let { cart } = useSelector((state) => state);

	let items = cart.reduce((acc, act) => acc + act.quantity, 0);

	return (
		<header className="header">
			<span className="logo">
				<Link to="/">MugiwaraShop</Link>
			</span>

			<nav className="nav">
				<ul className="menu">
					<li>
						<Link to="/">Início</Link>
					</li>
					<li>
						<Link to="/cart">Carrinho</Link>
						<span className="total-items">{items}</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}
