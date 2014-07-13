var letterCount = function(word) {
  var letters = word.toLowerCase();
  var result = {};

  for (i = 0; i < letters.length; i += 1) {
    if (result[letters[i]]) {
      result[letters[i]] += 1;
    }
    else {
      result[letters[i]] = 1;
    }
  }
  return result;
}

var myWord = 'BANANAS';
console.log(letterCount(myWord));