var myArray = [];

var numSquare = function(max) {
	for (var i = 0; i <= max; i += 1) {
		if (Math.sqrt(i).toString()[1] !== '.') {
			myArray.push(i);
		}
	}
	return myArray;
}

console.log(numSquare(100));