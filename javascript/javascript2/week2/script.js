// Doubling of number

// const numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers[i] = numbers[i] * 2;
//   }
// }

// console.log("The doubled numbers are", newNumbers); // [2, 6]

const numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log("The doubled numbers are", newNumbers);


// Working with movies

//1
const shortMovies = movies.filter(movie => movie.title.split(' ').length <= 2);

console.log('Short name movies: ', shortMovies);

//2
const longMovies = movies.filter(movie => movie.title.split(' ').length >= 3);

console.log('Long name movies: ', longMovies);

//3
const countMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);

console.log('1980-1989 movies: ', countMovies);

//4
const tagMovies = movies.map((movie) => {
    if (movie.rating >= 7) movie.tag = 'Good';
    else if (movie.rating >= 4 && movie.rating < 7) movie.tag = 'Average';
    else movie.tag = 'Bad';
    return movie;
});

console.log('Tag of movies: ', tagMovies);

//5
const ratingMovies = movies
    .filter(movie => movie.rating > 6)
    .map(movie => movie.rating);

console.log('Movie ratings: ', ratingMovies);

//6
const word = /Surfer|Alien|Benjamin/ig;
const countByWord = movies
    .filter(movie => movie.title.match(word))
    .map(movie => movie.title);

console.log('Movies with word: ', countByWord);

//7
const duplicateWord = movies
    .filter(movie => {
        let splitArr = movie.title.toLowerCase().split(' ');
        let duplArr = splitArr.filter((element, index) => {
            return splitArr.indexOf(element) !== index;
        })
        return duplArr.length;
    })
    .map(movie => movie.title);

console.log('Duplicate word movies: ', duplicateWord);

//8
const averageRating = movies
    .reduce((value, movie) => value + movie.rating, 0);

console.log('AVG rating:', averageRating / movies.length);

//9
let good = 0;
let average = 0;
let bad = 0;

const classRating = tagMovies
    .reduce((x, movie) => {
        if (movie.tag === 'Good') good++;
        else if (movie.tag === 'Average') average++;
        else bad++;
    });

console.log(`Good movies: ${good}, avg movies: ${average}, bad movies: ${bad}`);