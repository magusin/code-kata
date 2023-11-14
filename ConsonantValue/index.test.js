const solve = require('./index.js');

describe('ConsonantValue', () => {
    test('chruschtschov', () => {
        expect(solve('chruschtschov')).toBe(80)
    });
    test('khrushchev', () => {
        expect(solve('khrushchev')).toBe(38)
    });
    test('strength', () => {
        expect(solve('strength')).toBe(57)
    });
    test('catchphrase', () => {
        expect(solve('catchphrase')).toBe(73)
    });
    test('twelfthstreet', () => {
        expect(solve('twelfthstreet')).toBe(103)
    });
    test('mischtschenkoana', () => {
        expect(solve('mischtschenkoana')).toBe(80)
    });
    test('az', () => {
        expect(solve('az')).toBe(26)
    });
    test('z', () => {
        expect(solve('z')).toBe(26)
    });
});