const productFib = require('./index')

describe('Tests', () => {
    test('true fib', () => {
        expect(productFib(4895)).toStrictEqual([55, 89, true])
        expect(productFib(74049690)).toStrictEqual([6765, 10946, true])
        expect(productFib(193864606)).toStrictEqual([10946, 17711, true])
        expect(productFib(602070)).toStrictEqual([610, 987, true])
    });

    test('false fib', () => {
        expect(productFib(5895)).toStrictEqual([89, 144, false])
        expect(productFib(84049690)).toStrictEqual([10946, 17711, false])
        expect(productFib(447577)).toStrictEqual([610, 987, false])
    })
});