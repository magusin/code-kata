const generateHashtag = require('./index.js');

describe('HashTagGenerator', () => {
    test('Expected an empty string to return false', () => {
        expect(generateHashtag('')).toBe(false);
    });
    test('Expeted a world to be capitalized', () => {
        expect(generateHashtag('hello')).toBe('#Hello');
    });
    test('Expected two worlds to be capitalized', () => {
        expect(generateHashtag('hello world')).toBe('#HelloWorld');
    });
    test('Expected a world with a space before to be capitalized', () => {
        expect(generateHashtag(' hello')).toBe('#Hello');
    });
    test('Too long', () => {
        expect(generateHashtag('a'.repeat(140))).toBe(false);
    });
    test('Should work with a long string', () => {
        expect(generateHashtag('a'.repeat(139))).toBe('#A' + 'a'.repeat(138));
    });
    test('Should remove spaces', () => {
        expect(generateHashtag('    You     can   do              it')).toBe('#YouCanDoIt');
    });
});