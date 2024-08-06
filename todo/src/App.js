import React from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Bg from "./components/Bg";
import Games from "./components/Games";
import { useState } from "react";
import Sample from "./components/Sample";
import "./App.css";

const App = () => {
	const [bool, setBool] = useState(false);
	return (
		<div>
			<Bg />
			<Sample />
		</div>
	);
};

export default App;
