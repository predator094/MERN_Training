import React, { useEffect, useRef, useState } from "react";

const Sample = () => {
	const [count, setCount] = useState(0);

	// useRef is used to store the value of a variable that will not trigger a re-render
	let a = useRef(0);

	let b = useRef();
	const [Random, setRandom] = useState(0);

	useEffect(() => {
		//Mounting and Updating is controlled by this section of useEffect
		a.current = a.current + 1;
		console.log(`Value added ${count}, ${Random}, ${a.current}`);
		b.current.style.background = "transparent";
		//Unmounting is controlled by this return section of useEffect
		return () => {
			console.log(`Value removed ${count}, ${Random}`);
		};
	}, [count, Random]);

	const handleincrease = () => {
		setCount(count + 1);
	};

	const handledecrease = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleincrease}>Increase</button>
			<button onClick={handledecrease}>Decrease</button>
			<h1>{Random}</h1>
			<button
				ref={b}
				onClick={() => setRandom(Math.floor(Math.random() * 100))}>
				Random
			</button>
		</div>
	);
};
export default Sample;
