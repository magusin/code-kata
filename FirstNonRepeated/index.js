function firstNonRepeated(s) {
    const result = [];
    const letter = s.split("").map((letter) => {
      const objetFind = result.find((element) => element.letter === letter)
      if(objetFind) {
       objetFind.count++
      } else {
      result.push({
      count: 1,
      letter: letter
        })
      }
    })
    const resultSingle = result.find((element) => element.count === 1)
    return resultSingle ? resultSingle.letter : null
  }

    console.log(firstNonRepeated("stress"))
    console.log(firstNonRepeated("test"))
    console.log(firstNonRepeated("rend"))

    module.exports = firstNonRepeated;