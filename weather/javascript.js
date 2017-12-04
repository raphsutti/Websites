$(document).ready(function(){
	var lat;
	var lon;
	var kelvin;
	var celsius;
	// Get user current location
	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
	    	$("#location").html("latitude: " + lat + " longitude: " + lon);
  		
	  		var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cc67c4eb972b7fb904a993f2b521f6ba";
			$.getJSON(api, function(data) {
				kelvin = data.main.temp;
				celsius = kelvin - 273.15;
				
				$("#temp").html("The local temperature is: " + celsius.toPrecision(4) + " degrees celsius");
			})
			
		});
  	}
});


