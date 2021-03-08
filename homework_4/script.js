'use strict';

// 1) Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numberObject = {
    'единицы': 0,
    'десятки': 0,
    'сотни': 0,
};

// function numberToObject(number) {
//     if (number <= 999 && number >= 0) {
//         numberObject['единицы'] = number % 10;
//         numberObject['десятки'] = Math.trunc(number / 10 % 10);
//         numberObject['сотни'] = Math.trunc(number / 100 % 10);
//         console.log(numberObject);
//     }
//     else {
//         console.log('Число не входит в диапазон от 0 до 999');
//         console.log(numberObject);
//     }
// }

// чуть более оптимизированная версия
function numberToObject(number) {
    if (number <= 999 && number >= 0) {
        for (let item in numberObject){ //цикл для перебора свойств объекта
            numberObject[item] = number % 10;
            number = Math.trunc(number/10); //отбрасываем один десяток с конца для следующего цикла, math.trunc удаляет возникающую дробную часть
        }
        console.log(numberObject);
    }
    else {
        console.log('Число не входит в диапазон от 0 до 999');
        console.log(numberObject);
    }
}

let number = +prompt('Введите число от 0 до 999:');
numberToObject(number);

// 2) Продолжить работу с интернет-магазином.
// 2.1) В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?

// Ответ: объектами товара и корзины

// 2.2) Реализуйте такие объекты.

const products = {
    id: 0,
    name: '',
    // brand: '',
    // description: '',
    price: 0,
}

const itemsInCart = {
    productId: 0,
    count: 0,
    // totalPrice: 0,
}

// 2.3) Перенести функционал подсчета корзины на объектно-ориентированную базу.

const products = [{
    id: 1,
    name: 'ноутбук',
    price: 45000,
},
{
    id: 2,
    name: 'монитор',
    price: 25000,  
},
{
    id: 3,
    name: 'клавиатура',
    price: 5000,
},
{
    id: 4,
    name: 'мышь',
    price: 3500,
}
]

const itemsInCart = [{
    productId: 1,
    count: 1,
},
{
    productId: 2,
    count: 2,
},
{
    productId: 3,
    count: 2,
},
{
    productId: 4,
    count: 2,
}
]

function countBasketPrice() {
    let total = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
        for (let n = 0; n < products.length; n++) {
            if (itemsInCart[i].productId == products[n].id){
                total += itemsInCart[i].count * products[i].price;
            }
        }
    }
    return total;
}

console.log('Итого: ' + countBasketPrice());


// 3) * Подумать над глобальными сущностями.
// К примеру, сущность «Продукт» в интернет - магазине актуальна не только для корзины, но и для каталога.
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, 
// но в разных местах давал возможность вызывать разные методы.

// Данный объект спокойно можно использовать на странице товара

// const products = {
//     id: 0,
//     name: '',
//     brand: '',
//     description: '',
//     price: 0,
// }

// Базовый объект пользователя, например, для личного кабинета

// const users = {
//     id: 0,
//     name: '',
//     lastName: '',
//     middleName: '',
// }