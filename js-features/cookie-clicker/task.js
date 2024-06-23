const counterElement = document.getElementById('clicker__counter');

let counter = Number(counterElement.textContent);

const clickElement = document.getElementById('cookie');
const freqElement = document.getElementById('clicker__frequency');
const freqInterval = 1000;

let now = Date.now();

function onclickFunc() {
    freq = Date.now() - now;
    now = Date.now();
    freqElement.textContent = Math.round((freqInterval/freq)*100)/100;
    counter = counter + 1;
    if (counter != 0){ 
        counterElement.textContent = counter;
    }
    if (counter % 2 == 0) {
        clickElement.width = 200;
    }
    else {
        clickElement.width = 150;
    }
}

clickElement.onclick = function () {onclickFunc()};