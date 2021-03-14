'use strict';

// 1) Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.

const chessLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    chess = [
        { name: 'Черная ладья', position: 'A8', text: 'Л' },
        { name: 'Черная ладья', position: 'H8', text: 'Л' },
        { name: 'Черный конь', position: 'B8', text: 'К' },
        { name: 'Черный конь', position: 'G8', text: 'К' },
        { name: 'Черный cлон', position: 'C8', text: 'С' },
        { name: 'Черный cлон', position: 'F8', text: 'С' },
        { name: 'Черный ферзь', position: 'D8', text: 'Ф' },
        { name: 'Черный король', position: 'E8', text: '&#9813' },
        { name: 'Черная пешка', position: 'A7', text: 'П' },
        { name: 'Черная пешка', position: 'B7', text: 'П' },
        { name: 'Черная пешка', position: 'C7', text: 'П' },
        { name: 'Черная пешка', position: 'D7', text: 'П' },
        { name: 'Черная пешка', position: 'E7', text: 'П'},
        { name: 'Черная пешка', position: 'F7', text: 'П' },
        { name: 'Черная пешка', position: 'G7', text: 'П' },
        { name: 'Черная пешка', position: 'H7', text: 'П' },
        { name: 'Белая пешка', position: 'A2', text: 'П' },
        { name: 'Белая пешка', position: 'B2', text: 'П' },
        { name: 'Белая пешка', position: 'C2', text: 'П' },
        { name: 'Белая пешка', position: 'D2', text: 'П' },
        { name: 'Белая пешка', position: 'E2', text: 'П' },
        { name: 'Белая пешка', position: 'F2', text: 'П' },
        { name: 'Белая пешка', position: 'G2', text: 'П' },
        { name: 'Белая пешка', position: 'H2', text: 'П'},
        { name: 'Белая ладья', position: 'A1', text: 'Л'},
        { name: 'Белая ладья', position: 'H1', text: 'Л'},
        { name: 'Белый конь', position: 'B1', text: 'К' },
        { name: 'Белый конь', position: 'G1', text: 'К'},
        { name: 'Белый cлон', position: 'C1', text: 'С' },
        { name: 'Белый cлон', position: 'F1', text: 'С' },
        { name: 'Белый ферзь', position: 'D1', text: 'Ф' },
        { name: 'Белый король', position: 'E1', text: '&#9813' }
    ];

// нумерация столбцов
function setColumns() {
    let row = document.createElement("div");
    row.className = "row";
    row.id = "letters_row";
    document.getElementById('view').appendChild(row);
    for (let i = 1; i < 9; i++) {
        let column = document.createElement("div");
        column.className = "cell";
        column.innerHTML = chessLetters[i - 1];
        document.getElementById('letters_row').appendChild(column);
    }
}

// нумерация строк
function setLines(lines) {
    let line = document.createElement("div");
    line.className = "cell";
    line.innerHTML = lines;
    document.getElementById('table_row' + lines).appendChild(line);
}

// генерация поля
function Chess() {
    document.getElementById('view').innerHTML = ""; // очищаем содержимое главного блока (чтобы удалить содержимое по ранее вызванным функциям)
    let lines = 8; // количество линий на шахматной доске
    setColumns();
    for (let i = 1; i < 9; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.id = "table_row" + lines;
        document.getElementById('view').appendChild(row);
        setLines(lines);
        for (let j = 1; j < 9; j++) {
            let cell = document.createElement("div");
            if (i % 2 == j % 2) {
                cell.className = "cell";
                cell.id = chessLetters[j - 1] + lines;
                document.getElementById('table_row' + lines).appendChild(cell);
            } else {
                cell.className = "cell cell-black";
                cell.id = chessLetters[j - 1] + lines;
                document.getElementById('table_row' + lines).appendChild(cell);
            }
        }
        lines--;
    }

    // расстановка фигур на поле
    chess.forEach(function (item, i, chess) {
        let chessFigure = document.createElement("div");
        chessFigure.className = "chess_text";
        chessFigure.title = chess[i].name;
        chessFigure.innerHTML = "<p>" + chess[i].text + "</p>";
        document.getElementById(chess[i].position).appendChild(chessFigure);
    });
}

// 3) Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML - структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1) Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2) Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

const itemsInCart = {
    products: [
        {
            'название': 'ноутбук',
            'цена': 45000,
            'количество': 1,
        },
        {
            'название': 'монитор',
            'цена': 25000,  
            'количество': 2,
        },
        {
            'название': 'клавиатура',
            'цена': 5000,
            'количество': 2,
        },
        {
            'название': 'мышь',
            'цена': 3500,
            'количество': 2,
        }
    ],
    totalBasketPrice() {
        return this.products.reduce((totalPrice, cartItem) => totalPrice + cartItem['цена'] * cartItem['количество'], 0);
    },
    totalBasketCount() {
        return this.products.reduce((totalCount, cartItem) => totalCount + cartItem['количество'], 0);
    }
};

function Basket(){
    document.getElementById('view').innerHTML = ""; // очищаем содержимое главного блока (чтобы удалить содержимое по ранее вызванным функциям)

    let title = document.createElement("div");
    title.className = "basket-title";
    title.innerHTML = "<p> Корзина: </p>";
    document.getElementById('view').appendChild(title);

    // создаем таблицу
    let table = document.createElement("table");
    document.getElementById('view').appendChild(table);

    // создаем заголовок таблицы с значениями свойств объекта
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let key in itemsInCart.products[0]) {
        const th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    }

    // заполняем таблицу значениями
    for (let i = 0; i < itemsInCart.products.length; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let key in itemsInCart.products[i]) {
            const td = document.createElement('td');
            td.innerHTML = itemsInCart.products[i][key];
            tr.appendChild(td);
        }
    }

    let message = document.createElement("div");
    message.className = "basket-message";
    if (itemsInCart.totalBasketCount() === 0){
        message.innerHTML = "<p> Корзина пуста </p>";
    }
    // для определения правильных окончаний для слова "товар" (можно сделать то же самое для "рублей", но я решила пока не делать)
    else if (itemsInCart.totalBasketCount() % 10 === 1){
        message.innerHTML = "<p> В корзине " + itemsInCart.totalBasketCount() + " товар на сумму " + itemsInCart.totalBasketPrice() + " рублей </p>";
    }
    else if (itemsInCart.totalBasketCount() % 10 > 1 && itemsInCart.totalBasketCount() % 10 < 5) {
        message.innerHTML = "<p> В корзине " + itemsInCart.totalBasketCount() + " товара на сумму " + itemsInCart.totalBasketPrice() + " рублей </p>";
    }
    else{
        message.innerHTML = "<p> В корзине " + itemsInCart.totalBasketCount() + " товаров на сумму " + itemsInCart.totalBasketPrice() + " рублей </p>";
    }
    document.getElementById('view').appendChild(message);
}

// 4) Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1) Создать массив товаров(сущность Product);
// 4.2) При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML - код должен содержать только div id =”catalog” без вложенного кода.Весь вид каталога генерируется JS.

const products = [{
    id: 1,
    'наименование': 'ноутбук',
    'цена': 45000,
},
{
    id: 2,
    'наименование': 'монитор',
    'цена': 25000,
},
{
    id: 3,
    'наименование': 'клавиатура',
    'цена': 5000,
},
{
    id: 4,
    'наименование': 'мышь',
    'цена': 3500,
}
];

function Catalog() {
    document.getElementById('view').innerHTML = ""; // очищаем содержимое главного блока (чтобы удалить содержимое по ранее вызванным функциям)

    let title = document.createElement("div");
    title.className = "catalog-title";
    title.innerHTML = "<p> Каталог товаров: </p>";
    document.getElementById('view').appendChild(title);

    // создаем таблицу
    let table = document.createElement("table");
    document.getElementById('view').appendChild(table);

    // создаем заголовок таблицы с значениями свойств объекта
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let key in products[0]) {
        const th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    }

    // заполняем таблицу значениями
    for (let i = 0; i < products.length; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let key in products[i]) {
            const td = document.createElement('td');
            td.innerHTML = products[i][key];
            tr.appendChild(td);
        }
    }
}

Window.onload = Catalog; // но у меня почему-то это не работает