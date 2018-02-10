// 'this' refers to this object
var comments = {
	data: ['Good job!', 'bye', 'lame'],
	print: function() {
			this.data.forEach(function(el) {
			console.log(el);
			});
		}
}

// function print(arr) {
// 	arr.forEach(function(el) {
// 		console.log(el);
// 	});
// }

// print(comments.data)