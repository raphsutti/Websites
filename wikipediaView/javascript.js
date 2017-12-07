$(document).ready(function(){
	//Default input
	document.getElementById("wikiSearch").value = "Type your query here"
	// wikiSearch.addEventListener("input", check);
	// function check() {
	// 	var result = wikiSearch.value;
	// }

	$("#wikiSearch").click(function(){
		document.getElementById("wikiSearch").value = "";
	})
	$('#searchbtn').click(function(){
		var wikiSearch = $('#wikiSearch').val();
		console.log(wikiSearch);
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+wikiSearch+"&callback=?";
		console.log(url)
		// $.ajax({
		// 	type:"GET",
		// 	url:url,
		// 	async:false,
		// 	dataType: "json",
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	error: function(errorMessage){
		// 		alert("Error");
		// 	}
		// }

	})
})



