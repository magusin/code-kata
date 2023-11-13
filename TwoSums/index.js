// function twoSum(numbers, target) {
//     let answer;
//      numbers.map((number, index) => {
//        searchNumber = target - number;
//       if (numbers.includes(searchNumber)) {
//         return answer = [index, numbers.indexOf(searchNumber)]
//       }
//      })
//     return answer
//   }

function twoSum(numbers, target) {
    // Parcourir chaque élément du tableau avec une boucle externe
    for (let i = 0; i < numbers.length; i++) {
        // Pour chaque élément, parcourir tous les autres éléments avec une boucle interne
        for (let j = i + 1; j < numbers.length; j++) {
            // Vérifier si la somme des deux éléments équivaut à la cible
            if (numbers[i] + numbers[j] === target) {
                // Si oui, retourner les indices des deux éléments
                return [i, j];
            }
        }
    }
}

module.exports = twoSum