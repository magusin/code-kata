function solve(s) {
    let newS = s.split(/[aeiou]/g);
    let score = 0;
    for (i = 0; i < newS.length; i++) {
        if (newS[i].length !== 0) {
            letterScore = 0;
            for (letter of newS[i]) {
                letterScore += parseInt(letter, 36) - 9
            }
            if (letterScore > score) {
                score = letterScore
            }
            console.log(newS[i])
        }
    };
    return score;
}
console.log(solve('chruschtschov'))

module.exports = solve;