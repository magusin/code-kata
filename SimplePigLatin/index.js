function pigIt(str){
    const split = str.split(" ")
    for (let i=0; i<split.length; i++) {
      if (split[i] != '!' && split[i] != '?') {
      split[i] = split[i].substring(1) + split[i][0] + 'ay'
     }
    }
    return split.join(' ')
  }

