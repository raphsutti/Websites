$(document).ready(function(){
	var lat;
	var lon;
	var location;
	var kTemp;
	var cTemp;
	var fTemp
	var weather;
	var tempSwap = true;
	// Get user current location
	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(function(position) {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
	    	// $("#coord").html("latitude: " + lat.toFixed(2) + " longitude: " + lon.toFixed(2));
  		
	  		var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cc67c4eb972b7fb904a993f2b521f6ba";
			$.getJSON(api, function(data) {
				location = data.name;
				kTemp = data.main.temp;
				cTemp = kTemp - 273.15;
				fTemp = 9*(kTemp-273.15)/5 + 32;
				weather = data.weather[0].main;
				$("#location").html(location);
				$("#cTemp").html(cTemp.toFixed(2) + " degrees celsius");
				$("#weather").html(weather);
				// $("#fTemp").html(fTemp.toFixed(2) + " degress fahrenheit");
				$("#tempSwapBtn").click(function(){
					if(tempSwap) {
						$("#cTemp").html(fTemp.toFixed(2) + " degrees fahrenheit");
						tempSwap = false;
					} else if (!tempSwap) {
						$("#cTemp").html(cTemp.toFixed(2) + " degrees celsius");
						tempSwap = true;
					}
				});
			})
			
		});
  	}
});


