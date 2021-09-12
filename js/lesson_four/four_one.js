"use strict"

function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение аргумента должно быть целым числом в диапазоне [0 ... 999].');
        return {};
    }

    return {
        firstDigit: num % 10,
        secondDigit: Math.floor(num / 10) % 10,
        thisDigit: Math.floor(num / 100),
    };
}

console.log(getDigitsOfNumber());