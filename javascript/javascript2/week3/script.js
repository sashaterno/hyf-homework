// Warmup

//1
console.log('Script loaded!');

setTimeout(() => {
    console.log('Called after 2.5 seconds');
}, 2500)

//2
function showDelayMessage(delay, string) {
    setTimeout(() => {
        console.log(string);
    }, delay * 1000)
}

showDelayMessage(5, 'Called after 5 seconds');
showDelayMessage(3, 'Called after 3 seconds');

//3
const btn = document.querySelector('.btn');

btn.addEventListener('click', x => showDelayMessage(5, 'Called after 5 seconds!'));

//4
const earth = function earthLogger() { console.log('Earth') };
const saturn = function saturnLogger() { console.log('Saturn') };

function planetLogger(planetName) {
    planetName();
}

planetLogger(earth);
planetLogger(saturn);

//5
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', x => navigator.geolocation.getCurrentPosition(position));

const position = pos => {
    const longitude = pos.coords.longitude;
    const latitude = pos.coords.latitude;

    document.querySelector('.locat').textContent = `Longitude = ${longitude} | Latitude = ${latitude}`;
}

//7
function runAfterDelay(delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000)
}

runAfterDelay(4, function () {
    console.log('should be logged after 4 seconds');
})

//8
window.addEventListener("dblclick", event => {
    console.log('double click!')
})

//9
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) return logFunnyJoke();
    else return logBadJoke();
}

function logFunnyJoke() { console.log('funny joke') }
function logBadJoke() { console.log('bad joke') }

jokeCreator(true, logFunnyJoke, logBadJoke);


// Function as a variable

const funcArr = [
    function firstEl() { return 'First element' },
    function secondEl() { return 'Second element' },
    function thirdEl() { return 'Third element' }
];

funcArr.forEach(x => console.log(x()));

function declaration() {
    console.log('Function declarations load before any code is executed');
}

const expression = function () {
    console.log('Function expressions load only when the interpreter reaches that line of code');
}

declaration();
expression();

const funcObj = {
    firstKey: function firstFunc() { console.log('First function in object') }
}

funcObj.firstKey();