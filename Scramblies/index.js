// timeout error
// function scramble(str1, str2) {
//     const str1Arr = str1.split('');
//     const str2Arr = str2.split('');
//     const str2ArrLength = str2Arr.length;
//     const str1Copy = str1Arr;
//     const str2Copy = str2Arr;
//     for (i=0; i<str2ArrLength; i++) {
//         if (str1Arr.includes(str2Arr[0])) {
//             str1Arr.splice(str1Arr.indexOf(str2Arr[0]), 1);
//             str2Arr.splice(0, 1);
//             console.log(str1Arr, str2Arr)
//         } else {
//             return false;
//         }
//     }
//     if (str2Arr.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
//   }

function scramble(str1, str2) {
    // Compter les occurrences de chaque caractère dans str1
    const str1Counts = {};
    for (const char of str1) {
        if (!str1Counts[char]) {
            str1Counts[char] = 0;
        }
        str1Counts[char]++;
    }
    // Vérifier si str1 a suffisamment de chaque caractère pour couvrir str2
    for (const char of str2) {
        if (!str1Counts[char]) {
            return false; // str1 n'a pas ce caractère du tout
        }
        str1Counts[char]--;
        if (str1Counts[char] < 0) {
            return false; // str1 n'a pas assez de ce caractère
        }
        console.log(str1Counts)
    }

    return true;
}
    
module.exports = scramble;
console.log(scramble('rkqodllw','world'))
