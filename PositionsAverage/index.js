function posAverage(s) {
    const split = s.replaceAll(' ', '').split(",")
    
    count = 0
    total = 0
    for (i=0; i<split.length; i++) {
        for (j=i+1; j<split.length; j++) {
          
          for (k=0; k<split[i].length; k++) {
            if (split[i][k] === split[j][k]) {
                count+=1
            }
            total++
          }    
        }
    }
    return (count / total) * 100 
   
  }