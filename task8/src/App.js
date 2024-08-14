import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";
import { Router, Routes, Route } from "react-router";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" Component={Home}></Route>
				<Route path="/about" Component={About}></Route>
				<Route path="/contact" Component={Contact}></Route>
			</Routes>
		</div>
	);
}

export default App;
