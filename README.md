# shortestcommonsuperstring
Attempt at shortest common superstring assessment

An attempt at solving the shortest common superstring problem for a technical interview.<br>
<a href=https://en.wikipedia.org/wiki/Shortest_common_supersequence_problem>More information about the shortest common superstring can be found here.</a>

<h1>Running the Code!</h1>
<i>You should have node.js and npm!</i>
1. On your terminal/cmd/bash/etc. navigate to a folder you wish to initiate git on.
2. Type <strong>git init</strong>
3. Type <strong>git clone https://github.com/kevin-jinsang-kim/shortestcommonsuperstring.git</strong>
4. Navigate into the folder
5. Type <strong>node assessment</strong>
6. When the code runs, and the question appears, type a set of strings, separated by commas, but no spaces between the commas (e.g. abcd,cdef,efgh)

<i>If you want to run tests</i>
1. In the directory, type <strong>npm i jest</strong>
2. Once jest is installed, type <strong>npm run test</strong>


<h2>What is the shortest common superstring?</h2>

Before I explain the solution, I think it would be good if the reader gets a generic understanding of what this problem encompasses.

Let's say we have a quote, "all is well that ends well", and someone, for reasons, decides to split it into smaller fragments.<br>
For example, "all is well", "ell that en", "hat end" and "t ends well".<br>
If we combine the fragments using standard concatenation, we would end up with a string, "all is wellell that enhat endt ends well".<br>
Not only does this make no sense, I still have to figure out why anyone would do this.

However, if we approach this problem from the other direction, where we are given a whole bunch of small fragments, which require to become a large fragment, this makes sense.<br>
A great example in nature would be DNA sequencing. <br>

DNA bases are matched using CGAT, meaning that the average human is composed of a LOT of these. <br/>
For example, a small part of your DNA would be comprised of ACGTATCGACTAGCTGGACGATCGTACGGGCTAGCTACGTATCATCG, or something similar.

Now, there's something called <a href=https://en.wikipedia.org/wiki/Shotgun_sequencing>Genome Shotgun Sequencing</a>.<br>
This requires multiple smaller fragments of DNA to be made into a larger fragment, completing the DNA sequencing.


<h2>An explanation of my solution</h2>

Achieving the common superstring wasn't that difficult, but achieving the <strong>SHORTEST</strong> common superstring was the difficult part.<br>
It required to look at an array, where positioning of the element in the array shouldn't matter.<br>
To achieve this, I looked at permutations, and found something called the <a href=https://en.wikipedia.org/wiki/Heap%27s_algorithm>Heap's Permutation</a>.<br>

In short, my solution will look at an array, check for overlaps and combine strings (if no overlaps, it will concatenate), for every available permutation of the array.<br>
For example, if I have an array, ["abcd", "cdef", "yzab"], it would look at all the possible combinations to output "yzabcdef" instead of "abcdefyzab".<br>

<h3>Limitations</h3>

One of the problems with Heap's permutation, is that it will look at the number of outcomes in a n! manner, meaning that if there are 5 elements in the array, the total possible number of outcomes will be 1x2x3x4x5. <br>
This seems fine, until you get to numbers that are over 10, where 10! = 3628800. That's a LOT of computing going on. <br>
For this reason, I've set the maximum length of the array to 9 for performance reasons. Once an array has more than 9 elements, it will splice off whatever comes after position 9.<br>

Another limitation to my solution is the output, if there is more than 1 possible output, will be fixed.<br>
This comes from the <i>swap</i> function in the code, which is tied in closely with the Heap's permutation.<br>
Basically, this makes it so that the earlier positioned element, will always merge or concatenate into the later positioned element.<br>
For example, if we have an array ["abcd", "cdab"], the outcomes could either be "abcdab" or "cdabcd" as they have equal overlapping strings.<br>
However, in my solution, the outcome will always be "cdabcd".

<h3>Improvements in the Future</h3>
There are a few things I would like to do in the future if improvements are required. <br>
1. Refactor - There are a few ways to reduce code length in general using ES6 syntax, but as code readability was more important in the assessment, I've kept the code as readable as possible.<br>
2. Optimise - From what I found on good 'ol Stack Overflow, <a href=https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array>Heap's Permutation</a> is as fast as it gets for permutations, but I'd still like to look into this.<br>
3. Multiple Outputs - Based on the assessment requirements, I just needed to choose a method of outcome if there were multiple possibilities. It'd be nice to show all possible outcomes.

<h2>That's it folks!</h2>
