const utils = require('./utils.js')

/*
readline allows the user input to happen in node.js,
and the input is split into an array, before being passed into the superString function
*/
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  'Please enter the array you would like to superstring: \nHint: Please supply in the format "input,input2,input3" without spaces between the commas \n',
  (input) => {
    superString(input.split(","));
    readline.close();
  }
);

/*
Combines the util functions to use the permutate function to check all permutations of the array
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
  utils.permutate(sequences, function(output) {
    permutations.push(utils.combineSequences(output));
  });
  var result = permutations.reduce(function(shortest, elem) {
    return shortest.length < elem.length ? shortest : elem;
  });
  console.log("The shortest common superstring for the array you entered is: " + result + '\nThe length of the shortest common superstring is: ' + result.length);
  return result;
}

module.exports = {
  superString: superString
};