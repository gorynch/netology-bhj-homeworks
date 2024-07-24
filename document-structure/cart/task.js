const productDataSet = 'data-id';
const productClass = '.product';
const btnDecClass = '.product__quantity-control_dec';
const btnIncClass = '.product__quantity-control_inc';
const productCountClass = '.product__quantity-value';
const itemAddClass = '.product__add';
const itemTitle = '.product__title';
const itemImgClass = '.product__image';
const btnsAdd = document.querySelectorAll(itemAddClass);
const btnsDec = document.querySelectorAll(btnDecClass);
const btnsInc = document.querySelectorAll(btnIncClass);
const cartProductListClass = '.cart__products';
const cartProductClass = '.cart__product';
const cartProductImgClass = '.cart__product-image';
const cartProductCount = '.cart__product-count';
const cartTemplate = '<div class="cart__product" data-id="">\
                        <img class="cart__product-image" src="">\
                        <div class="cart__product-count"></div>\
                    </div>';
const cartList = document.querySelector(cartProductListClass);

let isInCart = false;

stringId2findElement = (a, b, c) => `[${a}='${b}']${c}`;

function setAttrItem (item, dataset, id, imgClass, img, textClass, text) {
    item.setAttribute(dataset, id);
    item.querySelector(imgClass).src = img;
    item.querySelector(textClass).textContent = text;
}

function changeCount(el) {
    let currentProduct = document.querySelector(stringId2findElement(productDataSet, el.currentTarget.my_id, productClass));
    if (el.currentTarget.dec) {
        if (Number(currentProduct.querySelector(productCountClass).textContent.trim()) > 1) {
            currentProduct.querySelector(productCountClass).textContent = Number(currentProduct.querySelector(productCountClass).textContent.trim())-1;
        }    
    }
    else {
        currentProduct.querySelector(productCountClass).textContent = Number(currentProduct.querySelector(productCountClass).textContent.trim())+1;
    }
}

function addItem2Cart (el) {
    let currentProduct = document.querySelector(stringId2findElement(productDataSet, el.currentTarget.my_id, productClass));
    let cartItem0 = document.querySelector(cartProductClass);
    let item;
    let count2Add;
    if (cartItem0) {
        document.querySelectorAll(cartProductClass).forEach((el) => {
            if (el.dataset.id == currentProduct.dataset.id) {
                isInCart = true;
            }
        })

        if (isInCart) {
            item = document.querySelector(stringId2findElement(productDataSet, el.currentTarget.my_id, cartProductClass));
            let countInCart = Number(item.querySelector(cartProductCount).textContent.trim());
            count2Add = countInCart + Number(currentProduct.querySelector(productCountClass).textContent.trim());
        }
        else {
            item = cartItem0.cloneNode(true);
            count2Add = currentProduct.querySelector(productCountClass).textContent.trim();
            cartList.appendChild(item);
        }
    }
    else {
        cartList.innerHTML = cartTemplate;
        item = document.querySelector(cartProductClass);
        count2Add = currentProduct.querySelector(productCountClass).textContent.trim();
    }
    setAttrItem(item, productDataSet, el.currentTarget.my_id, cartProductImgClass, el.currentTarget.img, cartProductCount, count2Add);
    isInCart = false;
}

btnsDec.forEach((el) => {
    el.addEventListener('click', changeCount, false);
    el.my_id = el.closest(productClass).dataset.id;
    el.dec = true;
});

btnsInc.forEach((el) => {
    el.addEventListener('click', changeCount, false);
    el.my_id = el.closest(productClass).dataset.id;
    el.dec = false;
});

btnsAdd.forEach((el) => {
    el.addEventListener('click', addItem2Cart, false);
    el.my_id = el.closest(productClass).dataset.id;
    el.img = el.closest(productClass).querySelector(itemImgClass).src;
});
