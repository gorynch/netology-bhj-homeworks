let count = Number(document.getElementById('timer').textContent);
const timerElement = document.getElementById('timer');

let interval = setInterval( function() {
    if (count == 0 ) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!');
        return;
    }
    count = count - 1;
    timerElement.textContent = count;
}, 1000);
