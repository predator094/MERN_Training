import React from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";

const App = () => {
	const [bool, setBool] = useState(false);
	return (
		<div>
			<button onClick={() => setBool(!bool)}>{bool ? "hide" : "show"}</button>
			{bool ? (
				<div
					style={{ width: "100px", height: "100px", background: "red" }}></div>
			) : null}
		</div>
	);
};

export default App;
