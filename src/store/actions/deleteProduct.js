export default function deleteProduct(id) {
	return {
		type: "deleteProduct",
		payload: id,
	};
}
