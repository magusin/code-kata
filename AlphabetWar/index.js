function alphabetWar(fight)
{
  const countZ = fight.split('z').length -1
  const countD = (fight.split('d').length -1) * 2
  const countQ = (fight.split('q').length -1) * 3
  const countM = (fight.split('m').length -1) * 4
  const rightScore = countZ + countD + countQ + countM
  const countS = fight.split('s').length -1
  const countB = (fight.split('b').length -1) * 2
  const countP = (fight.split('p').length -1) * 3
  const countW = (fight.split('w').length -1) * 4
  const leftScore = countS + countB + countP + countW
   if (rightScore > leftScore) {
     return 'Right side wins!'
   } else if (rightScore < leftScore) {
     return 'Left side wins!'
   } else {
     return "Let's fight again!"
   }
}