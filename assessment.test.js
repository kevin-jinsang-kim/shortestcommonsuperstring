const { test, expect } = require('@jest/globals');
const assessment = require('./assessment');

test('the shortest common superstring for ["abcd", "cdef", "efgh"] is "abcdefgh"', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(assessment.superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');

    console.log = consoleLog;
});

test('the shortest common superstring length for ["abcd", "cdef", "efgh"] is 8', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(assessment.superString(['abcd', 'cdef', 'efgh']).length).toBe(8)

    console.log = consoleLog;
});

test('the shortest common superstring for ["", "", ""] is ""', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(assessment.superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');

    console.log = consoleLog;
});

test('the shortest common superstring length for ["", "", ""] is 0', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(assessment.superString(['abcd', 'cdef', 'efgh']).length).toBe(8)

    console.log = consoleLog;
});

test('the shortest common superstring for ["all is well", "ell that en", "hat end", "t ends well"] is "all is well that ends well"', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(assessment.superString(["all is well", "ell that en", "hat end", "t ends well"])).toBe('all is well that ends well');

    console.log = consoleLog;
});

test('the shortest common superstring length for ["all is well", "ell that en", "hat end", "t ends well"] is 27', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(assessment.superString(["all is well", "ell that en", "hat end", "t ends well"]).length).toBe(26)

    console.log = consoleLog;
});

test('the swap function, if given ["abcd", "efgh"], the result should be ["efgh", "abcd"]', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    let array = ["abcd", "efgh"]
    assessment.swap(array,0,1)
    expect(array[0]).toBe("efgh")
    expect(array[1]).toBe("abcd")

    console.log = consoleLog;
});

test('the swap function, if given ["abcd", "efgh", "ijkl"], 0, 2, the result should be ["ijkl", "efgh", "abcd"]', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    let array = ["abcd", "efgh", "ijkl"]
    assessment.swap(array,0,2)
    expect(array[0]).toBe("ijkl")
    expect(array[1]).toBe("efgh")
    expect(array[2]).toBe("abcd")

    console.log = consoleLog;
});