// Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];

const nameToRemove = "Ahmad";

for (let i = 0; i < names.length; i++) {
    if (names[i] === nameToRemove) {
        names.splice(i, 1)
    }
}

console.log(names);


// When will we be there

function getTravelTime(speed, distance) {
    const time = distance / speed;
    const hours = Math.floor(time);
    const minutes = Math.round((time - hours) * 60);

    return `${hours} hours and ${minutes} minutes`
}

const travelTime = getTravelTime(60, 425);

console.log(travelTime);