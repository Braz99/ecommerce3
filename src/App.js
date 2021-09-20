import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
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
			</Switch>
		</BrowserRouter>
	);
}

export default App;
