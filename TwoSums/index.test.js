const TwoSums = require('./index');

describe('TwoSums', () => {
    test('should rturn correct index combination', () => {
        expect(TwoSums([1, 2, 3], 4)).toEqual([0, 2]);
        expect(TwoSums([1234, 5678, 9012], 14690)).toEqual([1, 2]);
        expect(TwoSums([2, 2, 3], 4)).toEqual([0, 1]);
        expect(TwoSums([2, 3, 1], 3)).toEqual([0, 2]);
    });
});