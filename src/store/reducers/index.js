import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

export const combined = combineReducers({
	cart: cartReducer,
});
