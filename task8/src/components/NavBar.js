import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">Anshul Yadav</div>
			<ul className="navbar-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
