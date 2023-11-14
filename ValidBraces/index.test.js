const validBraces = require('./index');

describe('ValidBraces', () => {
    test('should return true', () => {
        expect(validBraces('(){}[]')).toBe(true);
        expect(validBraces('([{}])')).toBe(true);
        expect(validBraces('({[]})')).toBe(true);
        expect(validBraces('{}')).toBe(true);
        expect(validBraces('()')).toBe(true);
        expect(validBraces('({})[({})]')).toBe(true);
    });
    test('should return false', () => { 
        expect(validBraces('[(])')).toBe(false);
        expect(validBraces('(}')).toBe(false);
        expect(validBraces(')(}{][')).toBe(false);
        expect(validBraces('())({}}{()][][')).toBe(false);
        expect(validBraces('(((({{')).toBe(false);
        expect(validBraces('}}]]))}])')).toBe(false);
    });
});