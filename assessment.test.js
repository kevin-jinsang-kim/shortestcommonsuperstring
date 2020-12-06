const { test, expect } = require('@jest/globals');
const assessment = require('./assessment');
const utils = require('./utils');

test('the shortest common superstring for ["abcd", "cdef", "efgh"] is "abcdefgh"', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');
});

test('the shortest common superstring length for ["abcd", "cdef", "efgh"] is 8', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh']).length).toBe(8)
});

test('the shortest common superstring for ["", "", ""] is ""', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');
});

test('the shortest common superstring length for ["", "", ""] is 0', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh']).length).toBe(8)
});

test('the shortest common superstring for ["all is well", "ell that en", "hat end", "t ends well"] is "all is well that ends well"', () => {
    expect(assessment.superString(["all is well", "ell that en", "hat end", "t ends well"])).toBe('all is well that ends well');
});

test('the shortest common superstring length for ["all is well", "ell that en", "hat end", "t ends well"] is 27', () => {
    expect(assessment.superString(["all is well", "ell that en", "hat end", "t ends well"]).length).toBe(26)
});



// combine below 2 test cases 
test('the swap function, if given ["abcd", "efgh"], the result should be ["efgh", "abcd"]', () => {
    let array = ["abcd", "efgh"]
    utils.swap(array,0,1)
    expect(array[0]).toBe("efgh")
    expect(array[1]).toBe("abcd")
});

test('the swap function, if given ["abcd", "efgh", "ijkl"], 0, 2, the result should be ["ijkl", "efgh", "abcd"]', () => {
    let array = ["abcd", "efgh", "ijkl"]
    utils.swap(array,0,2)
    expect(array[0]).toBe("ijkl")
    expect(array[1]).toBe("efgh")
    expect(array[2]).toBe("abcd")
});

// test('the swap function should return the correct element positions', () => {
//     const testDataArray = [
//         {
//             testArray: ["abcd", "efgh", "ijkl"],
//             position1: 0, 
//             position2: 2, 
//             expectedArray: ["ijkl", "efgh", "abcd"]
//         },
//         {
//             testArray: ["abcd", "efgh"],
//             position1: 0, 
//             position2: 1, 
//             expectedArray: ["efgh", "abcd"]
//         }
//     ];

//     testDataArray.forEach((testData => {
//         utils.swap(testData.testArray, testData.position1, testData.position2);
        
//         expect(testData.testArray).toBe(testData.expectedArray);
//     //     expect(array[]).toBe("ijkl")
//     // expect(array[1]).toBe("efgh")
//     // expect(array[2]).toBe("abcd")
//     }))
// })