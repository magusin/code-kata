const comp = require('./index.js');

describe('comp', () => {
    test('Square of numbers in array1 should be equal to numbers in array2', () => {
        expect(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])).toBe(true)
        expect(comp([11, 14, 19, 161, 190, 140, 19, 11], [11*11, 14*14, 144*144, 11*11, 161*161, 19*19, 144*144, 19*19])).toBe(false)
    });
});