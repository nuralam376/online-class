import React from "react";
import "./App.css";
import Shop from "./components/Shop/Shop.js";

function App() {
	return (
		<div className="App">
			<h1 className="title">Online Class</h1>
			{/* Displays the shop page */}
			<Shop></Shop>
		</div>
	);
}

export default App;
