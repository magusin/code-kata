function nextBigger(n) {
    const toString = n.toString()
    const length = toString.length
    let result = toString;
    if (length === 1) {
        return -1
    }
    const tri = result.split('')
    for (i = length - 1; i >= 0; i--) {
        // console.log(toString[i], toString[i - 1])
        if (parseInt(toString[i]) > parseInt(toString[i - 1])) {
            let left = tri.slice(0, i - 1);
            let right = tri.slice(i-1).sort((a, b) => a - b);
            console.log(left, right)
            tri[i] = toString[i - 1]
            tri[i - 1] = toString[i]
            result = parseInt([...left, ...right].join(''));
            break;
        }
    }
    console.log("result", result)
    if (result === toString) {
        return -1
    } else {
        return parseInt(result)
    }
}

// bad solution

console.log(nextBigger(5365))