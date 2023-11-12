function lookAndSaySequence(firstElement, n) {

    let sequence = firstElement;
    if (n === 1) {
        return firstElement;
    }
    for (i = 1; i < n; i++) {
        let count = 0;
        let newSequence = '';
        for (j = 0; j < sequence.length; j++) {
            if (sequence[j] === sequence[j + 1]) {
                count++;
            } else {
                newSequence += `${count + 1}${sequence[j]}`;
                count = 0;
            }
        }
        sequence = newSequence;
    }
    return sequence;
}

console.log(lookAndSaySequence('16', 22));

module.exports = lookAndSaySequence;