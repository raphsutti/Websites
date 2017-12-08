$(document).ready(function(){
	//Default input
	// document.getElementById("wikiSearch").value = "Type your query here"
	
	// wikiSearch.addEventListener("input", check);
	// function check() {
	// 	var result = wikiSearch.value;
	// }

	// Make default input disappear when clicked
	// $("#wikiSearch").click(function(){
	// 	document.getElementById("wikiSearch").value = "";
	// })

	$('#searchbtn').click(function(){
		var wikiSearch = $('#wikiSearch').val();
		// console.log(wikiSearch);
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+wikiSearch+"&format=json&callback=?";
		// console.log(url)

		// ajax call
		$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
				console.log(data[1][0]);
				console.log(data[2][0]);
				console.log(data[3][0]);
			},
			error: function(errorMessage){
				alert("Error");
			}
		});

	})
})



