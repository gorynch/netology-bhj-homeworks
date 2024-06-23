const winClass = 'hole_has-mole';
const winText = 'dead';
const loseText = 'lost';
const count2win = 10;
const count2lose = 5;
let winCounter = 0;
let loseCounter = 0;

for (let i = 1; i < 10; i++) {
    document.getElementById(`hole${i}`).addEventListener("click", function() {check4win(i)});
}

function check4win(i) {
    let checkClass = document.getElementById(`hole${i}`).className;
    if (checkClass.includes(winClass)) {
        winCounter = winCounter + 1;
        document.getElementById(winText).textContent = winCounter;
        if (winCounter == count2win) {
            promt('Победа!')
            loseCounter = 0;
            winCounter = 0;
            document.getElementById(loseText).textContent = loseCounter;
            document.getElementById(winText).textContent = winCounter;
        };
    }
    else {
        loseCounter = loseCounter + 1;
        document.getElementById(loseText).textContent = loseCounter;
        if (loseCounter == count2lose) {
            alert('Вы проиграли')
            loseCounter = 0;
            winCounter = 0;
            document.getElementById(loseText).textContent = loseCounter;
            document.getElementById(winText).textContent = winCounter;
        }
    };
};