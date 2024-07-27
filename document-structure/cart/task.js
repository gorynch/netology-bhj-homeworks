
stringId2findElement = (a, b, c) => `[${a}='${b}']${c}`;

function changeCount(el) {
    let currentProduct = document.querySelector(stringId2findElement('data-id', el.currentTarget.my_id, '.product'));
    if (el.currentTarget.dec) {
        if (Number(currentProduct.querySelector('.product__quantity-value').textContent.trim()) > 1) {
            currentProduct.querySelector('.product__quantity-value').textContent = Number(currentProduct.querySelector('.product__quantity-value').textContent.trim())-1;
        }    
    }
    else {
        currentProduct.querySelector('.product__quantity-value').textContent = Number(currentProduct.querySelector('.product__quantity-value').textContent.trim())+1;
    }
}

function addItem2Cart (el) {
    let currentProduct = document.querySelector(stringId2findElement('data-id', el.currentTarget.my_id, '.product'));
    let item2find = document.querySelector('.cart__products').querySelector(stringId2findElement('data-id', el.currentTarget.my_id, '.cart__product'));

    if (item2find == null) {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart__product');
        cartItem.setAttribute('data-id', el.currentTarget.my_id);
        let cartItemImg = document.createElement('img');
        cartItemImg.classList.add('cart__product-image');
        cartItemImg.src = el.currentTarget.img;
        let cartItemCount = document.createElement('div');
        cartItemCount.classList.add('cart__product-count');
        cartItemCount.textContent = el.currentTarget.closest('.product__quantity').querySelector('.product__quantity-value').textContent.trim();
        cartItem.appendChild(cartItemImg);
        cartItem.appendChild(cartItemCount);
        document.querySelector('.cart__products').appendChild(cartItem);
    }
    else {
        item2find.getElementsByClassName('cart__product-count')[0].textContent = Number(item2find.getElementsByClassName('cart__product-count')[0].textContent.trim())+Number(currentProduct.querySelector('.product__quantity-value').textContent.trim());

    }
}

document.querySelectorAll('.product__quantity-control_dec').forEach((el) => {
    el.addEventListener('click', changeCount, false);
    el.my_id = el.closest('.product').dataset.id;
    el.dec = true;
});

document.querySelectorAll('.product__quantity-control_inc').forEach((el) => {
    el.addEventListener('click', changeCount, false);
    el.my_id = el.closest('.product').dataset.id;
    el.dec = false;
});

document.querySelectorAll('.product__add').forEach((el) => {
    el.addEventListener('click', addItem2Cart, false);
    el.my_id = el.closest('.product').dataset.id;
    el.img = el.closest('.product').querySelector('.product__image').src;
});
