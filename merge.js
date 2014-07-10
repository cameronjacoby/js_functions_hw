var arr1 = [3,6,11]; 
var arr2 = [2,4,5,8,9];

var merge = function(arr1, arr2) {

	// finds the longest array to determine the range of our loop

	if (arr1.length > arr2.length) {
		var range = arr1.length;
	} else {
		var range = arr2.length;
  } 

	// merges the two arrays

	for (var i = 0; i < range; i += 1) {
		if (arr1[i] !== undefined) {
			arr2.push(arr1[i]);
		}
	}

	var mergedArray = arr2;
	return mergedArray;

// sorts the numbers inside the array

	for (var a = 0; a < mergedArray.length; a += 1) {
		for (var b = 0; b < mergedArray.length; b += 1) {
			if (mergedArray[a] < mergedArray[b]) {
				var container = mergedArray[a]; // holds onto the value of array[a] and saves it for later
				mergedArray[a] = mergedArray[b];			// swap the numbers
				mergedArray[b] = container;			// put the saved value back into the array
			}
		}
	}
	return mergedArray;
}

console.log(merge(arr1, arr2));











