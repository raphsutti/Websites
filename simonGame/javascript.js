const red = "red";
const blue = "blue";
const yellow = "yellow";
const green = "green";

var simon = {
	sendColor: function(color) {
		if(!simon.sequence.length){
			// start a new game
			simon.nextSequence();
		} else {
			if(color === simon.sequence[simon.step]){
				// go to next step
				// test if last item
				if(simon.step === simon.sequence.length-1) {
				  console.log("sequence complete")
				  simon.step = 0;
				  simon.nextSequence();
				} else {
				  simon.step++;
				}
			} else {
				// lose condition
				buzz.play();
				alert('Wrong!');
				simon.sequence = []
				simon.step = 0;
				$("#start").show();
			}
		}
		console.log("NEW COLOR: " + color);
  	},
	sequence: [],
	colors: [red, blue, yellow, green],
	step: 0,
	nextSequence: function(){
		var nextColor = simon.colors[Math.floor(Math.random() * simon.colors.length)]
		// console.log("The random color is ", nextColor);
		simon.sequence.push(nextColor);
		console.log("the sequence ", simon.sequence);
		for (var i=0; i<simon.sequence.length; i++) {

			// $("#"+simon.sequence[i]).css("border", "5px solid black");
			// $("#"+simon.sequence[i]).button('toggle');
			buzz.play();
			// $("#"+simon.sequence[i]).css("border", "");
			// $("#"+simon.sequence[i]).removeClass("btn-secondary");
		};
	}
}

$(document).ready(function() {
	var click = $("#click")[0];
	var wrong = $("#wrong")[0];
	var buzz = $("#buzz")[0];
	$("#start").click(function(){
		click.play();
		$("#start").hide();
		// $("#start").fadeOut(250);
		// $("#start").fadeIn(250);
		simon.nextSequence();
	});
	$("#blue").click(function() {
		click.play();
		simon.sendColor(blue);

	});
	$("#red").click(function() {
		click.play();
		simon.sendColor(red);
	});
	$("#yellow").click(function() {
		click.play();
		simon.sendColor(yellow);
	});
	$("#green").click(function() {
		click.play();
		simon.sendColor(green);
	});
  
  
})