"use strict"

const basket = {
    goods: [
        {
            id_product: 123,
            producy_name: "Ноутбук",
            prise: 45600,
            quantity: 1
        },
        {
            id_product: 123,
            producy_name: "Ноутбук",
            prise: 45600,
            quantity: 1
        },
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price, 0);
    }
};

console.log(basket.countBasketPrice());