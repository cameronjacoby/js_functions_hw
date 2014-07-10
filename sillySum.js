var mySillySum = 0;

var sillySum = function(arr) {
	for (var i = 0; i < arr.length; i += 1) {
		mySillySum += arr[i] * i;
	}
	return mySillySum;
}

var myArray = [1, 2, 3, 4];
console.log(sillySum(myArray));

var anotherArray = [20, 36, 79, 13, 57];
console.log(sillySum(anotherArray));