function mix(s1, s2) {
    const letterCount = [];
    let result = "";
    for (const char of s1) {
        if (char != " " && char.match(/[a-z]/)) {
            let objectTarget = letterCount.find(obj => obj.letter === char)
            if (objectTarget) {
                objectTarget.un++
            } else {
                letterCount.push({ un: 1, letter: char, deux: 0 })
            }
        }
    }

    for (const char of s2) {
        if (char != " " && char.match(/[a-z]/)) {
            let objectTarget = letterCount.find(obj => obj.letter === char)
            if (objectTarget) {
                objectTarget.deux++
            } else {
                letterCount.push({ un: 0, letter: char, deux: 1 })
            }
        }
    }
    // letterCount.sort((a, b) => b.un - a.un || b.deux - a.deux)
    letterCount.sort((a, b) => {
        let maxA = Math.max(a.un, a.deux);
        let maxB = Math.max(b.un, b.deux);
    
        // Tri par la plus grande valeur entre 'un' et 'deux'
        if (maxB !== maxA) {
            return maxB - maxA;
        }
    
        // Si les valeurs maximales sont égales, prioriser ceux où 'un' est différent de 'deux'
        if ((a.un === a.deux) !== (b.un === b.deux)) {
            return (a.un === a.deux) ? 1 : -1;
        }
    
        // Si 'un' est égal à 'deux', trier par 'un' en décroissant
        if (a.un === a.deux) {
            return b.un - a.un;
        }
    
        // En cas d'égalité totale, trier par ordre lexicographique de 'letter'
        return a.letter.localeCompare(b.letter);
    });
    for (i = 0; i < letterCount.length - 1; i++) {
        if (letterCount[i].un > 1 || letterCount[i].deux > 1) {
            if (letterCount[i].un == letterCount[i].deux) {
                result += "=:" + letterCount[i].letter.repeat(letterCount[i].un) + "/"
            } else {
                if (letterCount[i].un > letterCount[i].deux) {
                    result += "1:" + letterCount[i].letter.repeat(letterCount[i].un) + "/"
                } else if (letterCount[i].un < letterCount[i].deux) {
                    result += "2:" + letterCount[i].letter.repeat(letterCount[i].deux) + "/"
                }
            }
        }
    }
    result = result.slice(0, result.length - 1)
    console.log(letterCount)
    console.log(result)
    return result

}
mix("looping is fun but dangerous", "less dangerous than coding")

// ordre pas bon
