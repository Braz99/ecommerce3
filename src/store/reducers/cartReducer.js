export const cartReducer = (state = [], action) => {
	let item = state.find((item) => item.id === action.payload);

	switch (action.type) {
		case "addProduct":
			return [...state, action.payload];

		case "updateProduct":
			item.quantity += 1;

			item.price = (item.price / (item.quantity - 1)) * item.quantity;

			return [...state];

		case "removeProduct":
			if (item.quantity >= 1) {
				item.quantity -= 1;

				item.price = (item.price / (item.quantity + 1)) * item.quantity;
			}

			if (item.quantity === 0) {
				state = state.filter((i) => i.id !== action.payload);
			}

			return [...state];

		case "deleteProduct":
			state = state.filter((i) => i.id !== action.payload);

			return [...state];

		default:
			return [...state];
	}
};
