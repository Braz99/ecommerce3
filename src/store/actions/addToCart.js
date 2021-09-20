export default function addToCart(product) {
	return {
		type: "addProduct",
		payload: product,
	};
}
