console.log('Lets start');
const elementsClassName = "tab";
const contentClass = "tab__content";
const elementClassNameActive = "tab_active";
const contentClassActive = "tab__content_active";
const colection = document.querySelectorAll('.'+elementsClassName);
const colectionContent = document.querySelectorAll('.'+contentClass);
console.log(colectionContent);

for (let index = 0; index < elementsClassName.length; index++) {
    colection[index].addEventListener("click", function() {chooseItem(index)});
}

function chooseItem (itemIndex) {
    for (let index = 0; index < elementsClassName.length; index++) {
        colection[index].classList.remove(elementClassNameActive);
        colectionContent[index].classList.remove(contentClassActive);
    }
    colection[itemIndex].classList.add(elementClassNameActive);
    colectionContent[itemIndex].classList.add(contentClassActive);
}

console.log('done');