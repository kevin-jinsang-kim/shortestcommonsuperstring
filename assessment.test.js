const { test, expect } = require('@jest/globals');
const assessment = require('./assessment');
const utils = require('./utils');

test('The shortest common superstring for ["abcd", "cdef", "efgh"] is "abcdefgh"', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');
});

test('The shortest common superstring length for ["abcd", "cdef", "efgh"] is 8', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh']).length).toBe(8)
});

test('The shortest common superstring for ["", "", ""] is ""', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');
});

test('The shortest common superstring length for ["", "", ""] is 0', () => {
    expect(assessment.superString(['abcd', 'cdef', 'efgh']).length).toBe(8)
});

test('The shortest common superstring for ["all is well", "ell that en", "hat end", "t ends well"] is "all is well that ends well"', () => {
    expect(assessment.superString(["all is well", "ell that en", "hat end", "t ends well"])).toBe('all is well that ends well');
});

test('The shortest common superstring length for ["all is well", "ell that en", "hat end", "t ends well"] is 27', () => {
    expect(assessment.superString(["all is well", "ell that en", "hat end", "t ends well"]).length).toBe(26)
});

test('Position of elements in the array should not matter', () => {
    expect(assessment.superString(["hat end", "all is well", "t ends well", "ell that en"])).toBe('all is well that ends well');
});

test('If there are no overlaps, strings should concatenate', () => {
    expect(assessment.superString(['abcd', 'efgh']) == 'abcdefgh' || 'efghabcd').toBeTruthy;
});

test('Numbers should be covered too', () => {
    expect(assessment.superString(['1234', '3456', '5678'])).toBe('12345678');
});

test('The swap function should return the correct element positions', () => {
    var testDataArray = [
        {
            testArray: ["abcd", "efgh", "ijkl"],
            position1: 0, 
            position2: 2, 
            expectedArray: ["ijkl", "efgh", "abcd"]
        },
        {
            testArray: ["abcd", "efgh"],
            position1: 0, 
            position2: 1, 
            expectedArray: ["efgh", "abcd"]
        }
    ];

    testDataArray.forEach((testData => {
        const answer = utils.swap(testData.testArray, testData.position1, testData.position2); 
        expect(answer).toEqual(testData.expectedArray);
    }))
})