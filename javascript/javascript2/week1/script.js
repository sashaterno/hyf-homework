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