newFib = [];

function fib() {
    for (i = 0; i < 100; i++) {
        if (i === 0) {
            newFib.push(0);
        } else if (i === 1) {
            newFib.push(1);
        } else {
            newFib.push(newFib[i - 1] + newFib[i - 2]);
        }
    }
}
fib()

function productFib(prod) {
    for (i = 0; i < newFib.length; i++) {
        if (newFib[i] * newFib[i + 1] === prod) {
            return [newFib[i], newFib[i + 1], true]
        } else if (newFib[i] * newFib[i + 1] > prod) {
            return [newFib[i], newFib[i + 1], false]
        }
    }
}

module.exports = productFib