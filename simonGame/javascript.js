const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";

var simon = {
	sendColor: function(color) {
		console.log("NEW COLOR: " + color);
	}
}
$(document).ready(function(){
	// var buzzer = $('#buzzer')[0];
	$("#red").click(function(){
		simon.sendColor(RED)
	});
	$("#blue").click(function(){
		simon.sendColor(BLUE)
	});
	$("#yellow").click(function(){
		simon.sendColor(YELLOW)
	});
	$("#green").click(function(){
		simon.sendColor(GREEN)
	});
});