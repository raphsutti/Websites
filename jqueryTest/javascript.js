$(document).ready(function() {
	// $("#panel1").hide(500).show(500).slideUp(1000).delay(200).slideDown(1000);
	// $("#panel2").fadeToggle(2500).fadeToggle(2500);
	$("#panel1").css({
		color:"#FD7715", 
		fontWeight:'bold'
	});

	// modified looks of panel and button
	$("#panel2").css('opacity','0.5');
	$("#btn1").html('Changed Button 1')
	
	// add clicking functionality
	$(".panel-button").on('mouseover', function() {
		var panelId = '#'+$(this).attr('data-panelid'); // #panel*
		var content = "changed content!";
		$(panelId).fadeToggle();
		$(panelId+' .panel-body').html(content);
	});

	// $("#btn2").on('mouseover', function() {
	// 	$('#panel2').slideToggle(200);
	// });

	// $("#btn3").on('mouseover', function() {
	// 	$('#panel3').fadeToggle(200);
	// });

	// $("#btn4").on('click', function() {
	// 	$('#panel4 .panel-body').html('Changed content');
	// });


});