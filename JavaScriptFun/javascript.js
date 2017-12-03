// simple function
function go(name, age) {
	if (age < 20) {
		return name+ '!';
	} else {
		return name
	}
}
// alert( go('Raph', 19) );

// simple add function
function add(first, second) {
	return first+second;
}
// alert( "1+2 is " + add(1,2));

// array manipulation
var myList = ['apples', 'oranges', 'bananas'];
myList.push('pineapples');
myList.shift();
myList.pop();

// forEach method
var myList2 = ['apples', 'oranges'];
console.log(myList2);
myList2.forEach(function(value, index) {
	console.log(value, index);
	alert('I have '+value+' in my shopping bag');
});

// Loops: while do for
// while loop
var times = 0;
while (times < 4) {
	console.log('tried while', times);
	times++;
}

// do while loop (guaranteed one execution)
times = 0;
do {
	console.log('tried do', times);
	times++;
} while(times <2);

// for loop
var myList3 = ['Apples', 'Oranges', 'Bananas'];
for (var i=0; i<myList3.length; i++) {
	console.log('Current item is', myList3[i]);
}