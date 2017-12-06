var usrInput = document.getElementById('wikiSearch');

usrInput.addEventListener("input", check);

function check() {
	var result = usrInput.value;
	console.log(result);
}

