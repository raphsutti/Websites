var arr = [1,2,3];
var arr2 = [10,3,10,4];
var arr3 = [-5,100];

function sumArray(a) {
	var sum = 0;
	a.forEach(function(arr) {
		sum += arr;
	})
	return sum;
}

sumArray(arr);
sumArray(arr2);
sumArray(arr3);