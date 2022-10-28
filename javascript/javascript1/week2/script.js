// Flight booking fullname function

function getFullname(firstname, surname) {
    return firstname + ' ' + surname;
}

const fullname1 = getFullname("Niko", "Livingston");
const fullname2 = getFullname("Erik", "Hurley");

console.log(fullname1);
console.log(fullname2);


// Formal fullname

function getFullname(firstname, surname, useFormalName) {
    if (useFormalName) {
        return "Lord " + firstname + ' ' + surname;
    } else {
        return firstname + ' ' + surname;
    }
}

const fullnameTrue = getFullname("Niko", "Livingston", true);
const fullnameFalse = getFullname("Erik", "Hurley", false);
const fullnameEmptyString = getFullname("", "Wolter", true);
const fullnameEmptyBoolean = getFullname("David", "Wolter"); // If you do not enter the useFormalName parameter, this equates to false
// If at least something is entered then true ('' != true)
console.log(fullnameTrue);
console.log(fullnameFalse);
console.log(fullnameEmptyString);
console.log(fullnameEmptyBoolean);


// For women

function getFullname(firstname, surname, useFormalName, woman) {
    if (useFormalName) {
        if (woman) {
            return "Misses " + firstname + ' ' + surname;
        } else {
            return "Lord " + firstname + ' ' + surname;
        }
    } else {
        return firstname + ' ' + surname;
    }
}

const fullnameForWomen = getFullname("Chris", "Rayner", true, true);

console.log(fullnameForWomen);


// Event application

function getEventWeekday(days) {
    const eventDay = new Date();
    eventDay.setDate(days + eventDay.getDate());
    return `Today is ${new Date().toLocaleDateString("locale", { weekday: "long" })} and the event is in ${days} days. Therefore the event will be held on a ${eventDay.toLocaleDateString("locale", { weekday: "long" })}.`;
}

const result = getEventWeekday(2);

console.log(result);


// Weather wear

function getWhatToWear(temperature) {
    if (temperature >= 23) {
        return "t-shirt and shorts"
    } else if (temperature < 23 && temperature >= 15) {
        return "zip hoodie and jeans"
    } else {
        return "jacket and pants"
    }
}

const clothesWhenHot = getWhatToWear(25);
const clothesWhenOk = getWhatToWear(17);
const clothesWhenCold = getWhatToWear(11);

console.log(clothesWhenHot);
console.log(clothesWhenOk);
console.log(clothesWhenCold);


// Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length >= 6 && studentName !== "Queen") {
        console.log("Cannot add more students to class 07");
    } else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if (studentName === "") {
        console.log("You cannot add an empty string to a class");
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    console.log(`${class07Students.length} students in a class now`);
}

addStudentToClass("");
addStudentToClass("Peter");
addStudentToClass("Steve");
addStudentToClass("John");
addStudentToClass("Ruby");
addStudentToClass("Chris");
addStudentToClass("John");
addStudentToClass("Barry");
addStudentToClass("Lorenzo");
addStudentToClass("Queen");

getNumberOfStudents();


// Candy helper

const boughtCandyPrices = [];
const candyPrices = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    chewingGum: 0.03,
};
const amountToSpend = Math.floor(Math.random() * 100);
let amountToPay = 0;

function addCandy(candyType, weight) {
    boughtCandyPrices.push(weight * candyPrices[candyType]);
}

function canBuyMoreCandy() {
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        amountToPay += boughtCandyPrices[i];
    } if (amountToSpend >= amountToPay) {
        console.log(`You can buy more, so please do! Your Balance is ${amountToSpend}kr and you should to pay ${amountToPay}kr!`);
    } else {
        console.log(`Enough candy for you! Your Balance is ${amountToSpend}kr but you should to pay ${amountToPay}kr!`);
    }
}

addCandy("sweet", 20);
addCandy("chocolate", 15);
addCandy("toffee", 10);
addCandy("chewingGum", 25);

canBuyMoreCandy();


// Full name

function getFullname(firstname, surname, useFormalName, woman) {
    if (useFormalName) {
        if (woman) {
            return "Misses " + firstname + ' ' + surname;
        } else {
            return "Lord " + firstname + ' ' + surname;
        }
    } else {
        return firstname + ' ' + surname;
    }
}

const fullName = getFullname("Robert", "Davidson", true, false);

console.log(fullName);


// Weather wear switch case version

function getWhatToWear(temperature) {
    switch (true) {
        case temperature >= 23:
            return "t-shirt and shorts";
        case temperature < 23 && temperature >= 15:
            return "zip hoodie and jeans";
        default:
            return "jacket and pants";
    }
}

const clothesWhenWarm = getWhatToWear(26);
const clothesWhenNormal = getWhatToWear(15);
const clothesWhenIcy = getWhatToWear(9);

console.log(clothesWhenWarm);
console.log(clothesWhenNormal);
console.log(clothesWhenIcy);