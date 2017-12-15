$(document).ready(function() {
	// stores input
	var inputs = [""];
	// string result output that gets updated
	var totalStr;
	// for validation purposes- eg. cant do two operators, decimals etc
	// Operators array without .
	var opeators1 = ["+","*","/","-"];
	// Operators array with the .
	var operators2 = ["."];
	// to validate numbers
	var nums = [0,1,2,3,4,5,6,7,8,9];

	function getValue(input) {

	}
	// to update display
	function update() {
		totalString = inputs.join("");
		$("#steps").html(totalString);
	}
	// evaluates calculation
	function getTotal() {
		totalString = inputs.join("");
		// eval in built function will calculate
		$("#steps").html(eval(totalString));
	}

	$("a").on("click", function() {
		if(this.id === "deleteAll") {
			inputs = [""];
			update();
		} else if (this.id === "backOne")
			input.pop();
			update();
	});

});