'use strict';

// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// простые числа - это те, которые делятся только на 1 и на самих себя.
// таким образом, у них у всех только 2 делителя.

let i = 0;
while (i<=100){
    let dividers = 0; // переменная для подсчета делителей 
    for (let n = 1; n <= i; n++){
        if (i % n == 0){
            dividers++;
        }
    }
    if (dividers === 2){
        console.log(i);
    }
    i++;
}

// 2) Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве.

// a) Организовать такой массив для хранения товаров в корзине.

const cart = [
    ['ноутбук', 45000, 1],
    ['монитор', 25000, 2],
    ['клавиатура', 5000, 2],
    ['мышь', 3500, 2],
];

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        total += cart[i][1] * cart[i][2];
    }
    return total;
}

console.log('Итого: ' + countBasketPrice(cart));

// 3) Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

for (let i=0; i<10; console.log(i), i++) {
        // здесь пусто
    }

// 4) Нарисовать пирамиду в 20 рядом с помощью console.log.

let pyramid = '';
for (let i=0; i<20; i++){
    pyramid += 'x';
    console.log(pyramid);
}