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