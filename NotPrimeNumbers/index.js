function notPrimes(a, b) {
    const result = []
    for (i=a; i<b; i++) {
        const prime = isPrime(i)
        if (!prime) {
            const numbers = i.toString()
            const totalNumber = numbers.length
            let count = 0;
            for (number of numbers) {
                const intNumber = parseInt(number)
                const primeOrNot = isPrime(intNumber)
                if (primeOrNot) {
                    count+=1
                }
            }
            if (count === totalNumber) {
                result.push(i)
            }
           
        }
    }
    return result
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

module.exports = notPrimes

console.log(notPrimes(2700, 3000))