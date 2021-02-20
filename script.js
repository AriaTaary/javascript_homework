'use strict';

console.log(a); // hoisting
var test;
var a = 1;
// console.log(b);
let b = 2;
const c = 3;
console.log(a, b, c);

// // test = 123;
//
// function foo() {
//     var g = 123;
//     console.log(a, b, c);
// }
//
// // console.log(g);
// foo();

// const superUserName = 'Vasya'; // $_ camelCase

/**/

// /**
//  *
//  * @param param1 {number}
//  * @param param2 {number}
//  * @returns {number}
//  */
// function foo(param1, param2) {
//     return param1 * param2;
// }

// String
// let a = 'Привет';
// let a = "Привет";
// let a = `Привет`;
// console.log(typeof a);

// перенос строки
// console.log('первая строка\nвторая строка');
// console.log(`первая строка
// вторая строка`);
// console.log('первая строка\
//  вторая строка');

// console.log('Он сказал - "Привет!".');
// console.log('Он сказал - \'Привет!\'.');
// console.log("Он сказал - 'Привет!'.");
// console.log("Он сказал - \"Привет!\".");
// console.log(`Он сказал\` - 'Привет!".`);

// number
// const a = 1;
// const b = 3.14;
// const c = 10 / 0;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(c);
// console.log(10 * 'hi'); // => console.log(10 * NaN); => NaN

// let b = '3.14';
// console.log(typeof b);
//
// b = +b; // b = 3.14;
// b = -b; // b = -3.14;
// console.log(b);
// console.log(typeof b);
// console.log(parseInt(b));
// console.log(parseFloat(b));
// console.log(Number(b));

// console.log(2e3);
// console.log(2e-3);

// boolean (true / false)
// null
// undefined
// symbol

// const a = null;
// console.log(typeof null);

// const a = function () {
//
// };
// console.log(typeof a);

// Арифметические
// console.log(6 + 4);
// console.log(6 - 4);
// console.log(6 * 4);
// console.log(6 / 4);
// console.log(6 ** 4);
// console.log(6 % 3);

// сокращения присвоения
// let a = 1;
// a = a + 2;
// a += 2;
// a -= 2;
// a *= 2;
// a /= 2;
// a %= 2;
// console.log(a);

// конкатенация
// console.log('первая строка' + 'вторая строка');
// console.log('1' + '1'); // 11
// console.log('1' + 1); // => '1' + '1' => '11'
// console.log(1 + '1'); // => '1' + '1' => '11'
// console.log(1 + 1); // 2
// console.log(+'1' + +'1'); // 2
// console.log(Number('1') + Number('1')); // 2

// Сравнение
// const a = 5; b = 5;
// a > b;
// a >= b;
// a < b;
// a <= b;
// a == b;
// a === b;
// a != b;
// a !== b;
