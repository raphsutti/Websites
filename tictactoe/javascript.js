$(document).ready(function() {
	// Defaults player's turn to X
	var turn = "X";
	// Array stores values that we will check later for a winner
	var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
	// Default computer
	var computersTurn = "O";
	// Keeps track if it is the computer's turn
	var gameOn = false;
	// Keeps track of computer's turn so no loop
	var count = 0;
	// Change player's turn to X and computer's to "O"
	$('#turnX').click(function() {
		turn = 'O';
		computersTurn = "X";
		$("#turnX").removeClass("btn-primary");
		$("#turnO").addClass("btn-primary");
		reset();
	})

	// Change player's turn to O and computer's to "X"
	$('#turnO').click(function() {
		turn = 'X';
		computersTurn = "O";
		$("#turnO").removeClass("btn-primary");
		$("#turnX").addClass("btn-primary");
		reset();
	});

	function computerTurn() {
		// used to break while loop
		var taken = false;
		while(taken===false && count!==5) {
			// generate computer's random turn
			var computersMove = (Math.random()*10).toFixed();
			var move = $('#'+computersMove).text();
			if(move==='#') {
				$('#'+computersMove).text(computersTurn);
				taken = true;
				turns[computersMove] = computersTurn;
			}
		}
	}

	function playerTurn(turn, id) {
		var spotTaken = $("#" + id).text();
		if(spotTaken==="#") {
			count++;
			// set array
			turns[id] = turn;
			// set button
			$('#' +id).text(turn);
			winCondition(turns, turn);
			if(gameOn===false){
				computerTurn();
				winCondition(turns,computersTurn);
			}
		}
	}

	function winCondition(turnArray, currentTurn) {
		if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (top row 0,1,2)")
		} else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (middle row 3,4,5)" )
		} else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (bottom row 6,7,8)" )
		} else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (diagonal 2,4,6)")
		} else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (diagonal 0,4,8)")
		} else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (first column 0,3,6)" )
		} else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (middle column 1,4,7)" )
		} else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
			gameOn = true;
			reset();
			alert("Player " + currentTurn + " wins! (middle column 2,5,8)" )
		} else {
			gameOn = false;
		}
	}

	$(".tic").click(function() {
		var slot = $(this).attr('id');
		playerTurn(turn, slot);
	});

	function reset() {
		turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
		count=0;
		$(".tic").text('#');
		gameOn = false;
	}
});