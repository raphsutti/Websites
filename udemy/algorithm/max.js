var arr = [1,2,3];
var arr2 = [10,3,10,4];
var arr3 = [-5,100];

function max(a) {
	var result = 0;
	a.forEach(function(arr) {
		if (arr > result) {
			result = arr;
		}
	})
	return result;
}

max(arr);