function josephusSurvivor(n,k){
    let list = []
    let count = 0;
    if (k ===1) {
        return n
    }
    for (i=1; i<n+1; i++) {
      list.push(i)
    }
    while (list.length > 0) {
        if (list.length === 1) {
          return list[0]  
        }
      indexDelete = [];
      for (i=0; i<list.length; i++) {
        count++
        if (count === k) {
          indexDelete.push(i)
          count = 0
        }
      }
      const indexDeleteReverse = indexDelete.reverse()
      for (i=0; i<indexDeleteReverse.length; i++) {
        list.splice(indexDeleteReverse[i],1)
      }
    }
  }

console.log(josephusSurvivor(7,3)) // 4
console.log(josephusSurvivor(11,19)) // 10
console.log(josephusSurvivor(1,300)) // 1
console.log(josephusSurvivor(14,2)) // 13
console.log(josephusSurvivor(100,1)) // 100