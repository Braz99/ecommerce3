import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>

				<Route path="/checkout">
					<Checkout />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
