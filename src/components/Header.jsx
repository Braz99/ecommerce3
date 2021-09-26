import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
	let { cart } = useSelector((state) => state);

	let items = cart.reduce((acc, act) => acc + act.quantity, 0);

	return (
		<header className="header">
			<span className="logo">
				<Link to="/">Shop</Link>
			</span>

			<nav className="nav">
				<ul className="menu">
					<li className="icon-cart">
						<Link to="/cart">
							<FaShoppingCart />
						</Link>
						<span className="total-items">{items}</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}
