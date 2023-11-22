var findAverage = function (nums) {
    return (nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
    ) / nums.length)
  }