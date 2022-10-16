// Age-ify (A future age calculator)

const YEAR_OF_BIRTH = 2002;
let yearFuture = 2045;
let age = yearFuture - YEAR_OF_BIRTH;
console.log("You will be " + age + " years old in " + yearFuture);



// Goodboy-Oldboy (A dog age calculator)

const DOG_YEAR_OF_BIRTH = 2015;
let dogYearFuture = 2027;
let humanYear = dogYearFuture - DOG_YEAR_OF_BIRTH;
let dogYear = humanYear * 7;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
} else {
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture)
};
