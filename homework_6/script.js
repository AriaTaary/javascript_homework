'use strict';

const cartView = {
    header: `<tr>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Итоговая стоимость</th>
            </tr>`,
    itemRender(item) {
        return `<tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.count}</td>
                    <td>${item.count * item.price}</td>
                </tr>`;
    }
};

const catalogView = {
    header: `<tr>
                <th>Название</th>
                <th>Цена</th>
                <th>Изображение</th>
                <th>Добавить в корзину</th>
            </tr>`,
    itemRender(item) {
        return `<tr>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.img.mini}" data-full_image_url="${item.img.max}"></img></td>
                    <td><button id="add-to-cart-${item.id}">Добавить</button></td>
                </tr>`;
    }
}

const Cart = {
    cartListBlock: null,
    cartButton: null,
    cartView,
    products: [
        {
            id: 1,
            name: 'ноутбук',
            price: 45000,
            count: 1,
        },
        {
            id: 2,
            name: 'монитор',
            price: 25000,  
            count: 2,
        },
        {
            id: 3,
            name: 'клавиатура',
            price: 5000,
            count: 2,
        },
        {
            id: 4,
            name: 'мышь',
            price: 3500,
            count: 2,
        }
    ],
    totalBasketPrice() {
        return this.products.reduce((totalPrice, product) => totalPrice + product.price * product.count, 0);
    },
    totalBasketCount() {
        return this.products.reduce((totalCount, product) => totalCount + product.count, 0);
    },
    init() {
        document.querySelector('.cart-list').innerHTML = "";
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));
        this.cartListBlock.insertAdjacentHTML('afterbegin', this.cartView.header);
        this.render();
    },
    render() {
        if (this.products.length) {
            this.products.forEach(product => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartView.itemRender(product));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `<td colspan="4"> В корзине ${this.totalBasketCount()} ${this.getProductCountWord()} на сумму ${this.totalBasketPrice()} ₽</td>`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.products.reduce(function (price, product) {
            return price + product.price * product.quantity;
        }, 0);
    },
    clearCart() {
        this.products = [];
        this.render();
    },
    getProductCountWord() {
        let count = this.totalBasketCount() % 100;
        if (count > 19) {
            count = count % 10;
        }
        switch (count) {
            case 1: {
                return (`товар`);
            }
            case 2: case 3: case 4: {
                return (`товара`);
            }
            default: {
                return (`товаров`);
            }
        }
    }
};

Cart.init();

const Catalog = {
    catalogListBlock: null,
    catalogView,
    products: [
        {
            id: 1,
            name: 'ноутбук',
            price: 45000,
            count: 1, //count нужен для последующего добавления товара в объект корзины, в случае, если такого товара в ней нет
            img: {
                mini: './img/notebook-mini.jpg',
                max: './img/notebook.png',
            }
        },
        {
            id: 2,
            name: 'монитор',
            price: 25000,
            count: 1,
            img: {
                mini: './img/monitor-mini.jpg',
                max: './img/monitor.png',
            }
        },
        {
            id: 3,
            name: 'клавиатура',
            price: 5000,
            count: 1,
            img: {
                mini: './img/keyboard-mini.jpg',
                max: './img/keyboard.jpg',
            }
        },
        {
            id: 4,
            name: 'мышь',
            price: 3500,
            count: 1,
            img: {
                mini: './img/mouse-mini.jpg',
                max: './img/mouse.jpg',
            }
        },
        {
            id: 5,
            name: 'микрофон',
            price: 4500,
            count: 1,
            img: {
                mini: './img/micro-mini.jpg',
                max: './img/micro.jpg',
            }
        },
    ],
    settings: {
        previewSelector: '.catalog',
        openedImageWrapperClass: 'img_container',
        openedImageClass: 'img_max',
        openedImageScreenClass: 'img_background',
        openedImageCloseBtnClass: 'img_close',
        openedImageCloseBtnSrc: './img/close.svg',
        imageNotFoundSrc: './img/error.jpg',
    },
    totalCatalogCount() {
        return this.products.length;
    },
    init() {
        this.catalogListBlock = document.querySelector('.catalog-list');
        this.catalogListBlock.insertAdjacentHTML('afterbegin', this.catalogView.header);
        this.addButton = document.addEventListener('click', this.buttonClickHandler.bind(this));
        this.render();
        this.showPicture = document.querySelector(this.settings.previewSelector).addEventListener('click', event => this. pictureClickHandler(event));
    },
    buttonClickHandler(event) {
        if (event.target.tagName !== 'BUTTON') return;
        this.addProduct(event.target.id);
    },
    pictureClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;
        const img = new Image();
        img.src = event.target.dataset.full_image_url;
        img.onload = () => this.openImage(event.target.dataset.full_image_url);
        img.onerror = () => this.openImage(this.settings.imageNotFoundSrc);
    },
    openImage(src) {
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },
    getScreenContainer() {
        const imgElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
        if (imgElement) {
            return imgElement;
        }
        return this.createScreenContainer();
    },
    createScreenContainer() {
        const imgElement = document.createElement('div');
        imgElement.classList.add(this.settings.openedImageWrapperClass);

        const screenElement = document.createElement('div');
        screenElement.classList.add(this.settings.openedImageScreenClass);
        imgElement.appendChild(screenElement);

        const closeElement = new Image();
        closeElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeElement.src = this.settings.openedImageCloseBtnSrc;
        closeElement.addEventListener('click', () => this.close());
        imgElement.appendChild(closeElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        imgElement.appendChild(image);
        document.body.appendChild(imgElement);
        console.log(imgElement);
        return imgElement;
    },
    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },
    render() {
        if (this.products.length) {
            this.products.forEach(product => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogView.itemRender(product));
            });
            this.catalogListBlock.insertAdjacentHTML('beforeend', `<td colspan="4"> В каталоге ${this.totalCatalogCount()} ${this.getProductCountWord()}</td>`);
        } else {
            this.catalogListBlock.textContent = '<td colspan="4">Каталог пуст</td>';
        }
    },
    getCatalogPrice() {
        return this.products.reduce(function (price, product) {
            return price + product.price * product.quantity;
        }, 0);
    },
    addProduct(id) {
        this.products.forEach(product => {
            if (id === 'add-to-cart-' + product.id){
                let catalogId = product.id;
                let catalogProduct = product;
                let addCount = 0;
                Cart.products.forEach(product => {
                    if (product.id === catalogId){
                        product.count += 1;
                        addCount = 1;
                    }
                })
                if (addCount === 0){
                    Cart.products.push(catalogProduct);
                }
            }
        })
        Cart.init();
    },
    getProductCountWord() {
        let count = this.totalCatalogCount() % 100;
        if (count > 19) {
            count = count % 10;
        }
        switch (count) {
            case 1: {
                return (`товар`);
            }
            case 2: case 3: case 4: {
                return (`товара`);
            }
            default: {
                return (`товаров`);
            }
        }
    },
};

Catalog.init();