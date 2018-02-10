var movies = [
	{
		title: "Maze Runner",
		rating: 4,
		hasWatched: true
	},
	{
		title: "Black Panther",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Tomb Raider",
		rating: 3.5,
		hasWatched: false
	}
]

movies.forEach(function(movie) {
	console.log(buildString(movie));

})

function buildString(movie) {
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\"" + " - ";
	result += movie.rating + " stars";
	return result;
}