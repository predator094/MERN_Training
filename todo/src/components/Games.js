import React, { useState } from "react";
const Games = () => {
	const [checkedItems, setCheckedItems] = useState({
		Football: false,
		Cricket: false,
		Basketball: false,
	});

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		console.log(name, checked);
		setCheckedItems((prevCheckedItems) => ({
			...prevCheckedItems,
			[name]: checked,
		}));
	};
	const filteredKeys = Object.keys(checkedItems).filter(
		(key) => checkedItems[key]
	);
	return (
		<div>
			{Object.keys(checkedItems).map((item) => (
				<div>
					<label key={item}>
						<input
							type="checkbox"
							name={item}
							checked={checkedItems[item]}
							onChange={handleCheckboxChange}
						/>
						{item}
					</label>
					<br />
				</div>
			))}
			<div>
				User can play <span id="op">{filteredKeys.join(",")}</span>.
			</div>
		</div>
	);
};
export default Games;
