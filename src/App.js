import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
//import NoMatch from "./components/no-match/NoMatch"
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Route exact path="/" render={(props) => <Welcome {...props} name="Edwin" />} />
			<Route path="/clock" component={Clock} />
			<Route path="/contact" component={Contact} />
			<Route path="/jeopardy" component={Jeopardy} />
		</div>
	);
}

export default App;
