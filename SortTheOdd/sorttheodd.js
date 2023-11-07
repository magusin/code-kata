function sortArray(array) {

    const odds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    
    let oddIndex = 0;
    return array.map(num => num % 2 !== 0 ? odds[oddIndex++] : num);
  }