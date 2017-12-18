$(document).ready(function(){
	var buzzer = $('#buzzer')[0];
	// buzzer.play();

	var count = parseInt($("#num").html());
	console.log(count);
	$("#reset").hide();

	$("#minus5Clock").click(function(){
		if(count>5){
			count -=5;
		};
		$("#num").html(count);

	});
})