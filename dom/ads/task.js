const rotators = document.querySelectorAll('.rotator__case');
let i = 0;
let timer = rotators[i].dataset.speed;
rotators[i].style.color = rotators[i].dataset.color;
const rotatorTimer = setInterval(() => {
    rotators[i].classList.toggle('rotator__case_active')
    if (i == rotators.length-1) {
        i = 0;
    }
    else {
        i++;
    }
    rotators[i].classList.toggle('rotator__case_active')
    rotators[i].style.color = rotators[i].dataset.color;
    timer = rotators[i].dataset.speed;
}, timer);
