function encoder (number) {

let roman = '';

function romanNumber (number) {
if (number >= 1000) {
    roman += 'M';
    romanNumber(number - 1000);
} else if (number >= 900) {
    roman += 'CM';
    romanNumber(number - 900);
} else if (number >= 500) {
    roman += 'D';
    romanNumber(number - 500);
} else if (number >= 400) {
    roman += 'CD';
    romanNumber(number - 400);
} else if (number >= 100) {
    roman += 'C';
    romanNumber(number - 100);
} else if (number >= 90) {
    roman += 'XC';
    romanNumber(number - 90);
} else if (number >= 50) {
    roman += 'L';
    romanNumber(number - 50);
} else if(number >= 40) {
    roman += 'XL';
    romanNumber(number - 40);
} else if (number >= 10) {
    roman += 'X';
    romanNumber(number - 10);
} else if (number >= 9) {
    roman += 'IX';
    romanNumber(number - 9);
} else if (number >= 5) {
    roman += 'V';
    romanNumber(number - 5);
} else if (number >= 4) {
    roman += 'IV';
    romanNumber(number - 4);
} else if (number >= 1) {
    roman += 'I';
    romanNumber(number - 1);
}

return roman;
}
 return romanNumber(number);
}

module.exports = encoder