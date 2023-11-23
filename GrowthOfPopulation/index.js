function nbYear(p0, percent, aug, p) {
      let inhabitants = p0;
      let years = 0;
    while (inhabitants < p) {
      years++
      inhabitants = inhabitants + Math.floor(((inhabitants * percent) / 100)) + aug
    }
    return Number(years)
  }

console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)) // 94
console.log(nbYear(1500000, 0.25, -1000, 2000000)) // 151
console.log(nbYear(1500000, 0.25, 1, 2000000)) // 116
console.log(nbYear(1500000, 0, 1000, 2000000)) // 50
console.log(nbYear(1000, 2.0, 50, 1214)) // 4