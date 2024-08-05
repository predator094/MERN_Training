import React, { useState } from "react";

const Todo = () => {
	const [list, setList] = useState([]);
	const [task, setTask] = useState("");

	const handleAdd = () => {
		setList([...list, task]);
		setTask("");
	};

	const handleDelete = (index) => {
		const newList = list.filter((_, i) => i !== index);
		setList(newList);
	};

	return (
		<div>
			<input value={task} onChange={(e) => setTask(e.target.value)} />
			<button onClick={handleAdd}>Add</button>
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => handleDelete(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
