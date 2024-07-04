const book = document.getElementById('book');
const sizeClassActive = 'font-size_active';
const textColorClassActive = 'color_active';
const bckgdColorClassActive = 'color_active';
const bookSize = 'book_fs-';
const bookColor = 'book_color-';
const bookBckgdColor = 'book_bg-';
const textColor = 'text_color_';
const bckgdColor = 'bg_color_';
let textFonts = document.querySelectorAll('.font-size');
let contentColor = document.querySelectorAll('.color');

function fontChange(el) {
    textFonts.forEach((el) => {
        el.classList.remove(sizeClassActive);
        book.classList.remove(bookSize + el.dataset.size);
    });
    textFonts[el.currentTarget.param].classList.add(sizeClassActive);
    if (textFonts[el.currentTarget.param].dataset.size) {
        book.classList.add(bookSize + textFonts[el.currentTarget.param].dataset.size)
    }
}

function textColorChange(el) {
    contentColor.forEach((el) => {
        if (el.dataset.textColor) {
            el.classList.remove(textColorClassActive);
            book.classList.remove(bookColor + el.dataset.textColor)
        }
    })
    contentColor[el.currentTarget.param].classList.add(textColorClassActive);
    book.classList.add(bookColor + contentColor[el.currentTarget.param].dataset.textColor)
}

function bckgdColorChange(el) {
    contentColor.forEach((el) => {
        if (el.dataset.bgColor) {
            el.classList.remove(bckgdColorClassActive);
            book.classList.remove(bckgdColor + el.dataset.bgColor)
        }
    })
    contentColor[el.currentTarget.param].classList.add(bckgdColorClassActive);
    book.classList.add(bckgdColor + contentColor[el.currentTarget.param].dataset.bgColor)
}

textFonts.forEach((el, index) => {
    el.addEventListener('click', fontChange, false);
    textFonts[index].param = index;
});

contentColor.forEach((el, index) => {
    if (Boolean(el.closest('.book__control_color'))) {
        el.addEventListener('click', textColorChange, false);
        contentColor[index].param = index;    
    }
    if (Boolean(el.closest('.book__control_background'))) {
        el.addEventListener('click', bckgdColorChange, false);
        contentColor[index].param = index;    
    }
})