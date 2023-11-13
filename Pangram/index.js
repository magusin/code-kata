function isPangram(string) {
    const originalString = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let letter of originalString) {
        if (alphabet.includes(letter)) {
            alphabet = alphabet.replace(letter, '')
        }
    }
    if (alphabet.length === 0) {
        return true
    } else {
        return false
    }
}

isPangram("The quick brown fox jumps over the lazy dog.")