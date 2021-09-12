"use strich";

const basket = [
    ['Пылесос', 17000, 1],
    ['Чайник', 3000, 1],
    ['Микроволновка', 15000, 1]
];


// function countBasketPrice(basket) {

//     let basketPrice = 0;
//     for (let i = 0; i < basket.length; i++) {
//         basketPrice += basket[i][1] * basket[i][2];
//     }
//     return basketPrice;
// }

// function countBasketPrice(basket) {
//     let totalPrice = 0;
//     basket.forEach((cartItem) => {
//         totalPrice += cartItem[1] * cartItem[2]
//     });
//     return totalPrice;
// }

function countBasketPrice(basket) {
    return basket.reduce(function (totalPrice, cartItem) {
        return totalPrice + cartItem[1] * cartItem[2]
    }, 0);
}



console.log(countBasketPrice(basket))