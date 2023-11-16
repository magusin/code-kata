function squareOrSquareRoot(array) {
    const result = array.map((item) => {
      const square = Math.sqrt(item)
       if (Number.isInteger(Math.sqrt(item))) {
        return Math.sqrt(item)
      } else {
             return item * item                                          }
    })
    return result;  
  }

module.exports = squareOrSquareRoot