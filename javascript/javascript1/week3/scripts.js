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


// Series duration of my life

const seriesDurations = [
    {
        title: "Witcher",
        days: 0,
        hours: 16,
        minutes: 0,
    },
    {
        title: "Sherlock",
        days: 0,
        hours: 18,
        minutes: 0,
    },
    {
        title: "Vikings",
        days: 2,
        hours: 17,
        minutes: 16,
    },
];

function logOutSeriesText() {
    const lifeSpan = 80 * 365 * 24 * 60;

    let seriesTime = 0;

    for (let element of seriesDurations) {
        const seriesDuration = (element.days * 24 * 60) + (element.hours * 60) + element.minutes;
        const percentOfLife = (100 * (seriesDuration / lifeSpan));
        seriesTime += seriesDuration;

        console.log(`${element.title} took ${percentOfLife.toFixed(3)}% of my life`);
    }

    const totalTime = (100 * (seriesTime / lifeSpan));

    console.log(`In total that is ${totalTime.toFixed(2)}% of my life`);
}

logOutSeriesText();