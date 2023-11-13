const notPrimes = require('./index')

describe('notPrimes', () => {
    test('de 2 à 222', () => {
        expect(notPrimes(2, 222)).toEqual([22, 25, 27, 32, 33, 35, 52, 55, 57, 72, 75, 77]) 
    });
    test('de 2700 à 3000', () => {
        expect(notPrimes(2700, 3000)).toEqual([2722, 2723, 2725, 2727, 2732, 2733, 2735, 2737, 2752, 2755, 2757, 2772, 2773, 2775]) 
    });
    test('de 500 à 999', () => {
        expect(notPrimes(500, 999)).toEqual([522, 525, 527, 532, 533, 535, 537, 552, 553, 555, 572, 573, 575, 722, 723, 725, 732, 735, 737, 752, 753, 755, 772, 775, 777]) 
    });
    test('de 999 à 2500', () => {
        expect(notPrimes(999, 2500)).toEqual([2222, 2223, 2225, 2227, 2232, 2233, 2235, 2252, 2253, 2255, 2257, 2272, 2275, 2277, 2322, 2323, 2325, 2327, 2332, 2335, 2337, 2352, 2353, 2355, 2372, 2373, 2375]) 
    });
});