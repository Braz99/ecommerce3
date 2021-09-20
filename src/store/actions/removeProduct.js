export default function removeProduct(id) {
	return {
		type: "removeProduct",
		payload: id,
	};
}
