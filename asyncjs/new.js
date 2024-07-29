function printdata(data, name1) {
	setTimeout(() => {
		name1();
	}, 4000);
	console.log(data);
}

function getdata(name1) {
	console.log("helllo");
	setTimeout(() => {
		name1("hi", start);
	}, 2000);
}

function start() {
	console.log("Yo");
}
getdata(printdata);
