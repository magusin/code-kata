// function getChance(n, x, a) { 
//     if (n > x && n > a) {
//       const proba = (x / n) * a
//       console.log(proba.toFixed(2))
//       return parseFloat(proba.toFixed(2))
//     }
//     return 0.00;
//   }

function getChance(n, x, a) {
    let proba = 1;
  
    for (let i = 0; i < a; i++) {
      proba *= (n - x - i) / (n - i);
    }
  
    return parseFloat(proba.toFixed(2));
  }

    getChance(100, 10, 10)