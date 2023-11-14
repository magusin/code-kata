const scramble = require('./index');

describe('Scramblies', () => {
    test('rkqodllw, world', () => {
        expect(scramble('rkqodllw','world')).toBe(true)
    });
    test('cedewaraaossoqqyt, codewars', () => {
        expect(scramble('cedewaraaossoqqyt','codewars')).toBe(true)
    });
    test('katas, steak', () => {
        expect(scramble('katas','steak')).toBe(false)
    });
    test('scriptjava, javascript', () => {
        expect(scramble('scriptjava','javascript')).toBe(true)
    });
    test('scriptingjava, javascript', () => {
        expect(scramble('scriptingjava','javascript')).toBe(true)
    });
    test('scriptsjava, javascripts', () => {
        expect(scramble('scriptsjava','javascripts')).toBe(true)
    });
    test('jscripts, javascript', () => {
        expect(scramble('jscripts','javascript')).toBe(false)
    });
    test('aabbcamaomsccdd, commas', () => {
        expect(scramble('aabbcamaomsccdd','commas')).toBe(true)
    });
    test('commas, aabbcamaomsccdd', () => {
        expect(scramble('commas','aabbcamaomsccdd')).toBe(false)
    });
    test('sammoc, commas', () => {
        expect(scramble('sammoc','commas')).toBe(true)
    });
    test('large input test', () => {
        expect(scramble("abcdefghijklmnopqrstuvwxyz".repeat(10000),"zyxcba".repeat(9000))).toBe(true)
    });
});