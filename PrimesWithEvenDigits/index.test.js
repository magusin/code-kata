const f = require('./index.js');

describe('PrimesWithEvenDigits', () => {
    test('should return 887', () => {
        expect(f(1000)).toBe(887)
    });
    test('should return 1201', () => {
        expect(f(1210)).toBe(1201)
    });
    test('should return 8887', () => {
        expect(f(10000)).toBe(8887)
    });
    test('should return 487', () => {
        expect(f(500)).toBe(487)
    });
    test('should return 467', () => {
        expect(f(487)).toBe(467)
    });
});