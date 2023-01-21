// meowfacts
// A simple api that returns a random fact about cats on a GET request

const catFact = document.createElement("p");

document.body.append(catFact);

fetch('https://meowfacts.herokuapp.com/')
    .then((response) => response.json())
    .then((fact) => {
        catFact.innerHTML = `Funny fact is: ${fact.data}`;
    });