import React, { useState } from "react";

const Bg = () => {
	const [bg, setbg] = useState("");
	const [color, setcolor] = useState("");

	const handlecolor = () => {
		setcolor(bg);
	};

	return (
		<>
			<input type="text" onChange={(e) => setbg(e.target.value)} />
			<button onClick={handlecolor}>Color</button>
			<div
				id="op"
				style={{
					width: "200px",
					height: "200px",
					backgroundColor: color,
				}}></div>
		</>
	);
};

export default Bg;
