console.log("try 'isEven(4)'");
/*
function isEven(num) {
	if(num % 2 ===0) {
		return true;
	} else {
		return false;
	}
}
*/
function isEven(num) {
	return num % 2 === 0;
}

console.log("try 'factorial(3)'");
/*
function factorial(num) {
	if (num === 0) {
		return 1;
	}
	var result = 1;
	while(num > 0) {
		result *= num;
		num --;
	}
	return result;
}
*/
function factorial(num) {
	var result = 1;
	for (var i=2; i<=num; i++) {
		result *=i;
	}
	return result;
}

console.log("try 'kebabToSnake('dogs-are-awesome')'");
function kebabToSnake(str) {
	return str.replace(/-/g, '_');
}
