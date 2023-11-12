const lookAndSaySequence = require('./index');

describe('LookAndSaySequenceGenerator', () => {
    test('should return 1', () => {
        expect(lookAndSaySequence('1', 1)).toBe('1');
    });
    test('should return 11', () => {
        expect(lookAndSaySequence('1', 2)).toBe('11');
    });
    test('should return 21', () => {
        expect(lookAndSaySequence('1', 3)).toBe('21');
    });
    test('should return 1211', () => {
        expect(lookAndSaySequence('1', 4)).toBe('1211');
    });
    test('should return 111221', () => {
        expect(lookAndSaySequence('1', 5)).toBe('111221');
    });
    test('should return 22', () => {
        expect(lookAndSaySequence('22', 10)).toBe('22');
    });
    test('should return 1114', () => {
        expect(lookAndSaySequence('14', 2)).toBe('1114');
    });
});
