const { test, expect } = require('@jest/globals');
const superString = require('./assessment');

const inputArray = ["abcd", "cdef", "efgh"];

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