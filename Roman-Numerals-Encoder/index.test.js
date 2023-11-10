const encoder = require('./index.js');

describe('Roman-Numerals-Encoder', () => {
    test('Correct roman number', () => {
        expect(encoder(1)).toBe('I');
        expect(encoder(2)).toBe('II');
        expect(encoder(3)).toBe('III');
        expect(encoder(4)).toBe('IV');
        expect(encoder(5)).toBe('V');
        expect(encoder(9)).toBe('IX');
        expect(encoder(10)).toBe('X');
        expect(encoder(11)).toBe('XI');
        expect(encoder(19)).toBe('XIX');
        expect(encoder(22)).toBe('XXII');
        expect(encoder(15)).toBe('XV');
        expect(encoder(1000)).toBe('M');
        expect(encoder(1001)).toBe('MI');
        expect(encoder(1990)).toBe('MCMXC');
        expect(encoder(2007)).toBe('MMVII');
        expect(encoder(2008)).toBe('MMVIII');
    });
});