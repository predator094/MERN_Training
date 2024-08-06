import React from "react";
import { useContext } from "react";
import cnt from "./context/Context";
const Footer = (props) => {
	const count = useContext(cnt);
	return <footer>Footer and count is {count}</footer>;
};

export default Footer;
