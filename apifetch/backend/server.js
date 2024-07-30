const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;

app.use(cors());

app.get("/data", (req, res) => {
	res.json({
		message: "Hello, this is an API endpoint!",
		day: "Tuesday",
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
