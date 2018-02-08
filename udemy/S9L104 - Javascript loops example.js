console.log('Print all numbers from -10 to 19')
var num = -10;
while (num < 20) {
	console.log(num);
	num++;
}

console.log('Print all even numbers between 10 and 40')
var even = 10;
while (even <= 40) {
	if(even % 2 === 0 ) {
		console.log(even);
	}	
	even++;	
}

console.log('Print all odd numbers beween 300 and 333')
var odd = 300;
while (odd < 334) {
	if(odd % 2 != 0 ) {
		console.log(odd);
	}
	odd++;
}

console.log('Print all numbers divisible by 5 AND 3 between 5 and 50')
var div = 5;
while (div <= 50) {
	if(div % 5 === 0 && div % 3 === 0) {
		console.log(div);
	}
	div++;
}