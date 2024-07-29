let promise = new Promise((resolve, reject) => {
	var a = false;
	if (a) {
		resolve("Success");
	} else {
		reject("Failure");
	}
});

promise
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.log(error);
	});
