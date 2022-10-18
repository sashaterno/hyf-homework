// Age-ify (A future age calculator)

const yearOfBirth = 2002;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);



// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = humanYear * 7;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
} else {
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture)
};



// Housey pricey (A house price estimator)

let widthPeter = 8;
let depthPeter = 10;
let heightPeter = 10;
let gardenSizePeter = 100; //in m2
let houseCostPeter = 2500000;
let volumeInMetersPeter = widthPeter * depthPeter * heightPeter;
let houseRealPricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizePeter * 300;
console.log("Real price for Peter house is " + houseRealPricePeter);

if (houseRealPricePeter < houseCostPeter) {
    console.log("This house cost too much!")
} else {
    console.log("This house cost too little!")
};

let widthJulia = 5;
let depthJulia = 11;
let heightJulia = 8;
let gardenSizeJulia = 70; //in m2
let houseCostJulia = 1000000;
let volumeInMetersJulia = widthJulia * depthJulia * heightJulia;
let houseRealPriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeJulia * 300;
console.log("Real price for Julia house is " + houseRealPriceJulia);

if (houseRealPriceJulia < houseCostJulia) {
    console.log("This house cost too much!")
} else {
    console.log("This house cost too little!")
};



// Ez Namey (Startup name generator)

let firstWords = ["Corporate", "Awesome", "Extraordinary", "Phenomenal", "Rare", "Sensational", "Spectacular", "Amazing", "Majestic", "Grand"];
let secondWords = ["Chilly", "Arctic", "Coldish", "Hot", "Superior", "Wonderful", "Excellent", "Glorious", "Superb", "Groovy"];
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup: " + "\"" + startupName + "\"" + " contains " + startupName.length + " characters");