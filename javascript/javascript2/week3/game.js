// The fastest presser in this realm

const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const header = document.querySelector('h1');
const restart = document.querySelector('.btn2');

let gameStart = false;
let pointsS = 1;
let pointsL = 1;

btn.addEventListener('click', () => {
    if (Number(inp.value)) {
        gameStart = true;
        setTimeout(() => {
            gameStart = false;
            getWinner();
        }, inp.value * 1000)

        const time = setInterval(() => {
            inp.value--;
            if (inp.value <= 0) {
                clearInterval(time);
                header.innerHTML = "Good game!";
            }
        }, 1000);
    } else {
        right.innerHTML = "Error!";
        left.innerHTML = "Error!";
        header.innerHTML = "Error!";
        left.style.color = "red";
        right.style.color = "red";
    }
})

document.addEventListener("keypress", (event) => {
    if (gameStart) {
        if (event.key === "s") {
            left.innerHTML = pointsS++;
        }
        if (event.key === "l") {
            right.innerHTML = pointsL++;
        }
    }
})

function getWinner() {
    if (pointsS > pointsL) {
        left.innerHTML = "Winner!";
        left.style.color = "green";
    } else if (pointsL > pointsS) {
        right.innerHTML = "Winner!";
        right.style.color = "green";
    } else {
        left.innerHTML = "Draw!"
        right.innerHTML = "Draw!"
        right.style.color = "gold";
        left.style.color = "gold";
    }
}

restart.addEventListener('click', () => location.reload());