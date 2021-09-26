import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { store } from "./store/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		<ToastContainer
			position="top-center"
			autoClose={2500}
			hideProgressBar={true}
			limit={3}
			closeOnClick
			draggable
			pauseOnHover
		/>
	</React.StrictMode>,
	document.getElementById("root")
);
