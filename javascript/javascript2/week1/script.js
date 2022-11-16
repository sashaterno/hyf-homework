// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortest(arr) {
    let shortest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const currShortest = arr[i];
        if (currShortest.length < shortest.length) {
            shortest = currShortest;
        }
    }
    console.log(shortest);
}

getShortest(danishWords);


// Find and count the Danish letters

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

const strInfo = { total: 0, æ: 0, ø: 0, å: 0 };

function countLetters(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] in strInfo) {
            strInfo[str[i]]++;
            strInfo['total']++;
        }
    }
    console.log(`total: ${strInfo.total}, æ: ${strInfo.æ}, ø: ${strInfo.ø}, å: ${strInfo.å}`);
}

countLetters(danishString2);


// Spirit animal name generator

const spiritAnimal = ["Orchid Mantis", "The crying butterfly", "The fullmoon wolf", "Bernese Mountain Dog", "Blue-Footed Booby", "Bouvier des Flandres", "Capuchin Monkey", "Clouded Leopard", "Copperhead Snake", "Dromedary Camel"];

const page = document.querySelector('body');

const input = document.createElement('input');
const button = document.createElement('button');
button.innerText = 'Generate';

button.addEventListener('click', function () {
    const username = input.value;
    if (username === '') {
        const newP = document.createElement('p');
        newP.textContent = "What is your name?";
        page.appendChild(newP);
    } else {
        const random = spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
        const p = document.createElement('p');
        p.textContent = `${username} your spirit animal - ${random}!`;
        page.appendChild(p);
    }
})

page.appendChild(input);
page.appendChild(button);