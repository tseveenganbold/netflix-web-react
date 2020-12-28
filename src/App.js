import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home";

export function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/signin">
					<p>Sign in</p>
				</Route>
				<Route path="/signup">
					<p>Sign up</p>
				</Route>
				<Route path="/browse">
					<p>This page will be browse</p>
				</Route>
			</Switch>
		</Router>
	);
}
