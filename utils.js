/* 
  Swaps the position of 2 arrays. 
  The following function is a requirement for the Heaps Permutation 
  used to solve all the permutations of the input array
  */
function swap(array, pos1, pos2) {
  let swappedArray = array;
  var tempArrayPosition = array[pos1];
  swappedArray[pos1] = array[pos2];
  swappedArray[pos2] = tempArrayPosition;
  return swappedArray;
}

/*
  The following function applies Heap's permutation.
  It checks through every permutation of the array based on it's length.
  The 3rd argument, n, is not applicable in this scenario, 
  but would apply if more objects were required to be included in the permutation
  The following algorithm holds the last element of the array in place, and then performs permutations,
  attaching the last element to each permutation.
  */
function permutate(array, output, n) {
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
}

/*
  Checks for matching strings, and then outputs a combined string.
  Positional variance is calculated in the permutate function.
  If there is no overlap, it will concatenate the string.
  */
function combineSequences(sequences) {
  var result = sequences[0];

  for (var i = 1; i < sequences.length; i++) {
    for (var j = 0; j < result.length; j++) {
      var overlap_index = sequences[i].indexOf(result.slice(j));
      if (overlap_index == 0) {
        result = result + sequences[i].slice(result.slice(j).length);
        break;
      }
    }
    if (j == result.length) result = result + sequences[i];
  }
  return result;
}

module.exports = {
  combineSequences,
  permutate,
  swap,
};
