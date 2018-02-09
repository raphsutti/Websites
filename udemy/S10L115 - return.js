function capitalize(str) {
	if(typeof str === "number") {
		return "that's not a string";
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log ("capitalised of paris is " + capitalize("paris"))