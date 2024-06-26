console.log('Lets start');
const titleMenuClassName = "dropdown__value";
const menuDropDownClass = "dropdown__list";
const elementClassNameActive = "dropdown__list_active";
const listElementsClass = "dropdown__link";
const listElements = document.getElementsByClassName(listElementsClass);

Array.from(listElements).forEach(
    function(element, index, array) {
        element.addEventListener("click", function() {chooseItem(index)});
    }
);

if ([...document.getElementsByClassName(titleMenuClassName)].length == 1) {
    [...document.getElementsByClassName(titleMenuClassName)][0].addEventListener("click", () => dropDownClick());
}

function dropDownClick () {
    [...document.getElementsByClassName(menuDropDownClass)][0].classList.add(elementClassNameActive);
}

function chooseItem (itemIndex) {
    let newItem = [...document.getElementsByClassName(listElementsClass)][itemIndex].textContent;
    [...document.getElementsByClassName(titleMenuClassName)][0].textContent = newItem;
    [...document.getElementsByClassName(menuDropDownClass)][0].classList.remove(elementClassNameActive);
}

console.log('done');