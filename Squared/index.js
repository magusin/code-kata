function comp(array1, array2) {
    count = 0;
    outer: for (let square of array2) {
        for (let number of array1) {
            if (number * number == square) {
                count += 1
                continue outer;
            }
        }
    }
    if (count === array1.length) {
        return true;
    } else {
        return false;
    }
}

module.exports = comp