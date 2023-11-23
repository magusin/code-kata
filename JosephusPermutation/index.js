function josephus(items,k){
    let currentItem = items;
    let count = 0;
    const result = [];
    let indexDelete = [];
    while (items.length > 0) {
        if (items.length === 1) {
          result.push(items[0])
          items = []
          break
        }
      indexDelete = [];
      for (i=0; i<currentItem.length; i++) {
        count++
        if (count === k) {
          result.push(currentItem[i])
          indexDelete.push(i)
          count = 0
        }
      }
      const indexDeleteReverse = indexDelete.reverse()
      for (i=0; i<indexDeleteReverse.length; i++) {
        items.splice(indexDeleteReverse[i],1)
      }
      currentItem = items
    }
    return result
  } 



console.log(josephus([1,2,3,4,5,6,7],3)) // [3,6,2,7,5,1,4]
console.log(josephus([1,2,3,4,5,6,7,8,9,10],1)) // [1,2,3,4,5,6,7,8,9,10]
console.log(josephus(["C","o","d","e","W","a","r","s"],4)) // ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']