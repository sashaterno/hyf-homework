// Giphy api

const key = 'SSgyeOfkOeXUwGwClQvzo13ckCNxviUT';
const input = document.querySelector('.inp');
const button = document.querySelector('.btn');
const input2 = document.querySelector('.inp-2');

button.addEventListener('click', showGifs);

function showGifs() {
    let word = input.value;
    let number = input2.value;

    if (word.length === 0 || number.length === 0) alert('Input is empty!');

    else fetch(
        `https://api.giphy.com/v1/gifs/search?q=${word}}&limit=${number}&api_key=${key}`
    )
        .then((result) => result.json())
        .then((gif) => {
            gif.data.forEach((element) => {
                const gifImg = document.createElement("iframe");
                gifImg.setAttribute("src", element.embed_url);
                document.querySelector(".giphy").appendChild(gifImg);
            })
        })
}