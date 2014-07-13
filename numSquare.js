var myArray = [];

var numSquare = function(max) {
	for (var i = 0; i <= max; i += 1) {
		if (Math.sqrt(i) % 1 === 0) {
			myArray.push(i);
		}
	}
	return myArray;
}

console.log(numSquare(100));


// alternate solution

var numSquare = function(max) {
	var squaresArr = [];

	for (i = 1; i * i <= max; i += 1) {
		squaresArr[i] = i * i;
	}
	return squaresArr;
}