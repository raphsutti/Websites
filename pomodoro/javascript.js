$(document).ready(function(){
	var buzzer = $('#buzzer')[0];

	var count = parseInt($("#num").html());
	var breakTime = parseInt($("#breakNum").html());
	// console.log(count);
	$("#reset").hide();

	$("#start").click(function() {
		// run this every 1s
		var counter = setInterval(timer, 1000);

		function timer() {
			// hide variables
			$("#start, #minus5Clock, #add5Clock, #add5Break, #minus5Break, #breakNum, #title1, #title2").hide();
			$("#timeType").html("Session Time:");
			count -= 1;
			// stop at 0
			if(count === 0 ) {
				buzzer.play();
				clearInterval(counter);
			}
			$("#num").html(count);

		}
	})

	$("#minus5Clock").click(function(){
		if(count>5){
			count -=5;
		};
		$("#num").html(count);
	});

	$("#add5Clock").click(function(){
		count +=5;
		$("#num").html(count);
	});

	$("#minus5Break").click(function(){
		if(breakTime>5){
			breakTime -=5;
		};
		$("#breakNum").html(breakTime);
	});
	
	$("#add5Break").click(function(){
		breakTime +=5;
		$("#breakNum").html(breakTime);
	});
})