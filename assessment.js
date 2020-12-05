/*
readline allows the user input to happen in node.js,
and the input is split into an array, before being passed into the superString function
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Please enter the array you would like to superstring: \nHint: Please supply in the format "input,input2,input3" without spaces between the commas \n', input => {
  superString(input.split(','));
  readline.close()
})

/* 
Swaps the position of 2 arrays. 
The following function is a requirement for the Heaps Permutation 
used to solve all the permutations of the input array
*/
var swap = function (array, pos1, pos2) {
  var tempArrayPosition = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = tempArrayPosition;
};

/*
The following function applies Heap's permutation.
It checks through every permutation of the array based on it's length.
The 3rd argument, n, is not applicable in this scenario, 
but would apply if more objects were required to be included in the permutation
The following algorithm holds the last element of the array in place, and then performs permutations,
attaching the last element to each permutation.
*/
var permutate = function (array, output, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      permutate(array, output, n - 1);
      if (n % 2) {
        var p = 1;
      } else {
        var p = i;
      }
      swap(array, p - 1, n - 1); // -1 to account for javascript zero-indexing
    }
  }
};

/*
Checks for matching strings, and then outputs a combined string.
Positional variance is calculated in the permutate function.
If there is no overlap, it will concatenate the string.
*/
function combineSequences(sequences) {

  var result = sequences[0];
  
  for (var i = 1; i < sequences.length; i++) {
    for (var j = 0; j < result.length; j++) {
      var overlap_index = sequences[i].indexOf(result.slice(j))
      if (overlap_index == 0) {
        result = result + sequences[i].slice(result.slice(j).length)
        break;
      }
    }
    if (j == result.length) result = result + sequences[i];
  }
  return result;
}

/*
Combines the above functions to use the permutate function to check all permutations of the array
and then pushes the output of the Heaps Permutation into the combineSequence function, 
then the output of the combineSequences is then pushed into an empty array.
The array is then reduced, comparing the shortest outputs of each of the array,
then the shortest solution is returned as the result.
*/
function superString(sequences) {
  if (sequences.length > 9) {
    sequences.splice(9)
  }
  if (sequences == "") {
    return "";
  }
  var permutations = [];
  permutate(sequences, function(output) {
    permutations.push(combineSequences(output));
  });
  var result = permutations.reduce(function(shortest, elem) {
    return shortest.length < elem.length ? shortest : elem;
  });
  console.log("The shortest common superstring for the array you entered is: " + result + '\nThe length of the shortest common superstring is: ' + result.length);
  return result;
}

module.exports = {
  superString: superString,
  swap: swap,
  combineSequences: combineSequences 
};