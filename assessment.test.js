const { test, expect } = require('@jest/globals');
const superString = require('./assessment');

test('the shortest common superstring for ["abcd", "cdef", "efgh"] is "abcdefgh"', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');

    console.log = consoleLog;
});

test('the shortest common superstring length for ["abcd", "cdef", "efgh"] is 8', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(superString(['abcd', 'cdef', 'efgh']).length).toBe(8)

    console.log = consoleLog;
});

test('the shortest common superstring for ["", "", ""] is ""', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(superString(['abcd', 'cdef', 'efgh'])).toBe('abcdefgh');

    console.log = consoleLog;
});

test('the shortest common superstring length for ["", "", ""] is 0', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(superString(['abcd', 'cdef', 'efgh']).length).toBe(8)

    console.log = consoleLog;
});

test('the shortest common superstring for ["all is well", "ell that en", "hat end", "t ends well"] is "all is well that ends well"', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(superString(["all is well", "ell that en", "hat end", "t ends well"])).toBe('all is well that ends well');

    console.log = consoleLog;
});

test('the shortest common superstring length for ["all is well", "ell that en", "hat end", "t ends well"] is 27', () => {
    const consoleLog = console.log;
    console.log = jest.fn();

    expect(superString(["all is well", "ell that en", "hat end", "t ends well"]).length).toBe(26)

    console.log = consoleLog;
});
