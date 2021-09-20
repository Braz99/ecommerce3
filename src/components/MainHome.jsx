import React from "react";
import Product from "./Product";

export default function MainHome() {
	let data = require("../api/products.json");
	return (
		<ul className="homeList">
			{data.map((product, index = product.id) => (
				<Product key={index} product={product} />
			))}
		</ul>
	);
}
