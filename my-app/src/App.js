import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Body from "./Body";
import "./App.css";

const App = () => {
	return (
		<div className="app-container">
			<Header />
			<Navbar />
			<Body />
			<Footer />
		</div>
	);
};

export default App;
