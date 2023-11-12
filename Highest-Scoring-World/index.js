function high(x) {
    const scoring = [];
    let highestScore = 0;
    const worlds = x.split(" ")
    for (let world of worlds) {
        let score = 0;
        for (let letter of world) {
            const calcScore = parseInt(letter, 36) - 9
            score += calcScore
        }
        scoring.push(score)
        if (score > highestScore) {
            highestScore = score
        }
    }
    const index = scoring.indexOf(highestScore)
    return worlds[index]
}


module.exports = high