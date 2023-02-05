const commLine = process.argv.slice(2);

const sum = commLine.reduce(
    (last, curr) => Number(last) + Number(curr), 0);

if (commLine.length === 0) {
    console.log("You have empty input");
} else if (isNaN(sum)) {
    console.log("You need to use numbers");
} else {
    const avg = (sum / commLine.length).toFixed(1);
    console.log(`AVG: ${avg}`);
};