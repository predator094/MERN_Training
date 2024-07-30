async function printvalue() {
	var x = 1;
	var y = 10;
	console.log(x);
	x = await new Promise((resolve) => {
		resolve(x + 1);
	});
	console.log(y);
	console.log(x);
}
printvalue();
