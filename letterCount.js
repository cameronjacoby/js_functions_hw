var count = {};

var letterCount = function(word) {
  var string = word.toLowerCase();

  for (i = 0; i < string.length; i += 1) {
    count[string[i]] = 0;

    for (j = 0; j < string.length; j += 1){
      if (string[i] === string[j]) {
        count[string[i]] += 1
      }
    }
  }
  return count;
}

var myWord = 'BANANAS';
console.log(letterCount(myWord));