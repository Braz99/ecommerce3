export default function updateProduct(id) {
	return {
		type: "updateProduct",
		payload: id,
	};
}
