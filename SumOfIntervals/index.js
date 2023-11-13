function sumIntervals(intervals) {
    let interval = [];
    for (number of intervals) {
        for (i=number[0]; i<number[1];i++) {
            console.log(i)
            if (!interval.includes(i)) {
                interval.push(i)
            }
        }
        console.log(interval)
    }
    console.log(interval.length)
    return interval.length
  }

sumIntervals([[1,5],[6,10]])

// don't work for big interval