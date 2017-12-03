var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

/* eventlistener eg: 
click, mouseenter mouseleave focus blur
mousedown mouseup mousemove keydown keyup
*/

// Adding events
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

// use || to avoid NaN from adding undefined
function add() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	addSum.innerHTML = "Your sum is: "+(one+two);
};

// Picture events
var grace = document.getElementById("grace");
var margaret = document.getElementById("margaret");
var ada = document.getElementById("ada");

grace.addEventListener("click", picLink);
margaret.addEventListener("click", picLink);
ada.addEventListener("click", picLink);

function picLink () {
	var allImages = document.querySelectorAll('img');

	for (var i=0; i<allImages.length; i++) {
		allImages[i].className = "hide";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide") {
		pic.className = "";
	} else {
		pic.className ="hide";
	}
};