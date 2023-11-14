function f(n) {
    let prime = [];
    for (i = n -1; i > 2; i--) {
        if (isPrime(i)) {
          let even = 0;
          let numbers = `${i}`;
          for (let number of numbers) {
            if (number % 2 === 0) {
                even += 1
            }
        }
          prime.push({ prime: i, count: even})     
        }
    }
    prime.sort((a, b) => b.count - a.count)
    console.log(prime)
    return parseInt(prime[0].prime);
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

module.exports = f