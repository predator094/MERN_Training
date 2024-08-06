import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./Body";
import "./App.css";
import cnt from "./context/Context";

const App = () => {
	const [count, setCount] = React.useState(0);

	return (
		<div className="app-container">
			<cnt.Provider value={count}>
				<Header />
				Count is {count}
				<button onClick={() => setCount(count + 1)}>Increment</button>
			</cnt.Provider>
		</div>
	);
};

export default App;
