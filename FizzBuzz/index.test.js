const fizzBuzz = require('./index')

describe('FizzBuzz', () => {
    test('divisible par 3 et 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
        expect(fizzBuzz(45)).toBe('FizzBuzz')
        expect(fizzBuzz(60)).toBe('FizzBuzz')
        expect(fizzBuzz(75)).toBe('FizzBuzz')
    });

    test('divisible par 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(6)).toBe('Fizz')
        expect(fizzBuzz(9)).toBe('Fizz')
        expect(fizzBuzz(12)).toBe('Fizz')
        expect(fizzBuzz(18)).toBe('Fizz')
    });

    test('divisible par 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
        expect(fizzBuzz(10)).toBe('Buzz')
        expect(fizzBuzz(20)).toBe('Buzz')
        expect(fizzBuzz(25)).toBe('Buzz')
        expect(fizzBuzz(35)).toBe('Buzz')
    });

    test('non divisible par 3 ou 5', () => {
        expect(fizzBuzz(1)).toBe(1)
        expect(fizzBuzz(2)).toBe(2)
        expect(fizzBuzz(4)).toBe(4)
        expect(fizzBuzz(7)).toBe(7)
        expect(fizzBuzz(8)).toBe(8)
    });
})