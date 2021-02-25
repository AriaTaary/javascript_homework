'use strict';

// 1) Дан код. Почему он даёт именно такие результаты?

// ++a Префиксная форма возвращает новое значение
// b++ Постфиксная форма возвращает старое значение
// НО в обоих случаях инкремент увеличивает значение на 1

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // Возвращает 2, по факту a = 2
d = b++; console.log(d);           // Возвращает старое значение b = 1, по факту b = 2
c = (2 + ++a); console.log(c);     // Выводит 5, 2 + (a = 3)
d = (2 + b++); console.log(d);     // Выводит 4, 2 + (b по факту = 3, но возвращает старое значение b = 2)
console.log(a);                    // Возвращает конечное 3
console.log(b);                    // Возвраащет конечное 3

// 2) Чему будет равен x в примере ниже?

// x *= y оператор присваивания, который равен x = x * y
var y = 2;
var x = 1 + (y *= 2); // x = 1 + (y = y * 2) = 1 + (y = 4) = 5
console.log(y); // Возвращает 4
console.log(x); // Возвращает 5

/* 
3)  Объявить две целочисленные переменные n и m и задать им произвольные начальные значения. 
    Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; 
    ноль можно считать положительным числом.
*/

let n = +prompt('Введите целочисленное значение перемннной n: ');
let m = +prompt('Введите целочисленное значение перемннной m: ');

if ((n >= 0) && (m >= 0)) {
    alert(n + ' - ' + m + ' = ' + (n - m));
} else if ((n < 0) && (m < 0)){
    alert(n + ' * ' + m + ' = ' + (n * m));
} else {
    alert(n + ' + ' + m + ' = ' + (n + m));
}

/*
4)  Присвоить переменной r значение в промежутке [0..15]. 
    С помощью оператора switch организовать вывод чисел от a до 15.
*/

// функция по генерации целочисленных рандомных чисел
// Math.random возвращает рандомное число меньше 1
// Math.floor округляет аргумент до ближайшего меньшего целого
// min - минимально возможное число
// max - максимально возможное число

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    // max - min считает количество чисел в диапазоне
    // получаем [0, max - min) (круглая скобка в конце)
    // +1 нужен, чтобы включалось максимальное число (иначе рандом будет не включая число max)
    // получаем [0, max - min]
    // +min нужен, чтобы был отсчет от необходимого минимального (иначе будет от 0)
    // получаем [min, max]
}

let min = +prompt('Введите минимальное значение: ');
let max = +prompt('Введите максимальное значение: ');
let r = getRandomInt(min, max);

alert('Сгенерированное число = ' + r);

// организован одновременный вывод всего ряда чисел
// переменная arr - строка, в которую записываются значения r + пробел (для читабельности)

var arr = '';
switch (r){
    case 0:
        arr += String(r + ' ');
        r++;
    case 1:
        arr += String(r + ' ');
        r++;
    case 2:
        arr += String(r + ' ');
        r++;
    case 3:
        arr += String(r + ' ');
        r++;
    case 4:
        arr += String(r + ' ');
        r++;
    case 5:
        arr += String(r + ' ');
        r++;
    case 6:
        arr += String(r + ' ');
        r++;
    case 7:
        arr += String(r + ' ');
        r++;
    case 8:
        arr += String(r + ' ');
        r++;
    case 9:
        arr += String(r + ' ');
        r++;
    case 10:
        arr += String(r + ' ');
        r++;
    case 11:
        arr += String(r + ' ');
        r++;
    case 12:
        arr += String(r + ' ');
        r++;
    case 13:
        arr += String(r + ' ');
        r++;
    case 14:
        arr += String(r + ' ');
        r++;
    case 15:
        arr += String(r + ' ');
}
alert(arr);

// вывод ряда чисел через цикл for

// var arr = '';
// for (r; r <= max; r++) {
//     arr += String(r + ' ');
// }
// alert(arr);

/*
5)  Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
    Обязательно использовать оператор return.
*/

let number1 = +prompt('Введите значение первой переменной: ');
let number2 = +prompt('Введите значение второй переменной: ');

function sum(number1, number2){
    return number1 + number2;
}

function subtraction(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

alert(number1 + ' + ' + number2 + ' = ' + sum(number1, number2));
alert(number1 + ' - ' + number2 + ' = ' + subtraction(number1, number2));
alert(number1 + ' * ' + number2 + ' = ' + multiply(number1, number2));
alert(number1 + ' / ' + number2 + ' = ' + division(number1, number2));

/*
6)  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
    где arg1, arg2 – значения аргументов,
    operation – строка с названием операции. 
    В зависимости от переданного значения операции выполнить одну из арифметических операций
    (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

let arg1 = +prompt('Введите значение первого аргумента: ');
let arg2 = +prompt('Введите значение второго аргумента: ');
let operation = +prompt('Выберите операцию:\n1 - сложение\n2 - вычитание\n3 - умножение\n4 - деление');

// в случае строчных данных в переменной operation

// let operation = 'sum';
// let operation = 'subtraction';
// let operation = 'multiply';
// let operation = 'division';

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        // case 'sum':
        case 1:
            alert(arg1 + ' + ' + arg2 + ' = ' + sum(arg1, arg2));
            break;
        // case 'subtraction':
        case 2:
            alert(arg1 + ' - ' + arg2 + ' = ' + subtraction(arg1, arg2));
            break;
        // case 'multiply':
        case 3:
            alert(arg1 + ' * ' + arg2 + ' = ' + multiply(arg1, arg2));
            break;
        // case 'division':
        case 4:
            alert(arg1 + ' / ' + arg2 + ' = ' + division(arg1, arg2));
            break;
    };
}

mathOperation(arg1, arg2, operation);

/*
7)  Сравнить null и 0. 
    Попробуйте объяснить результат.
*/

if (0 == null) { // ложь, так как значения не равны
    console.log('0 = null');
} else if (0 > null) { // ложь, так как 0 не больше 0
    console.log('0 > null');
} else if (0 >= null){ // истина, так как 0 >= 0
    console.log('0 >= null');
} else if (0 <= null){ // истина, так как 0 <= 0
    console.log('0 <= null');
}

// null является отсутствием какого-либо значения
// НО операторы сравнения преобразуют null в число, считая его за 0
// а для нестрогого равенства значение null ни к чему не приводится, поэтому данное равенство ложно
// (для строгого равенства тоже ложно)

/* 
8)  С помощью рекурсии организовать функцию возведения числа в степень. 
    Формат: function power(val, pow), 
    где val – заданное число, pow – степень.
*/

let val = +prompt('Введите желаемое число: ');
let pow = +prompt('Введите желаемую степень: ');

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

alert(val + ' в ' + pow + ' степени = ' + power(val, pow));