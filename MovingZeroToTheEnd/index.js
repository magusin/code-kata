function moveZeros(arr) {
    console.log('begin:',arr)
    let count = 0
    let nonZeroElements = [];
     for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        nonZeroElements.push(arr[i]);
      } else {
        count++;
      }
    }
    for (i=0; i<count; i++) {
      nonZeroElements.push(0)
    }
    return nonZeroElements
  }

  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]