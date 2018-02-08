// create secret number
var secretNumber = 4;

// ask user for guess
var guess = Number(prompt('Guess a number'));

// check if guess correct
if (guess === secretNumber) {
	alert('You got it right!');
} else if (guess > secretNumber) {
	alert('Too high, guess again');

} else {
	alert('Too low, guess again');
}
