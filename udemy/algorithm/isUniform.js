arr = [1,1,1,1];
arr2 = [2,1,1,1];
arr3 = ['a','b','p'];
arr4 = ['b','b','b'];

function isUniform(a) {
	for(var i=1; i<a.length; i++) {
		if(a[i] != a[i-1]) {
			return false;
		}
	} return true;

}

/*
function isUniform(a) {
	for(var i=1; i<a.length; i++) {
		if(a[i] != a[0]) {
			return false;
		}
	} return true;

}
*/