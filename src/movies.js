// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const   newArray = moviesArray.map(element => element.director);
    return (newArray);
}
// console.log(getAllDirectors(movies));

function cleanDirectors(moviesArray) {
    const all = getAllDirectors(moviesArray);
    const clean = [...new Set(all)];
    return (clean);
}
// console.log(cleanDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (!moviesArray || moviesArray.length === 0)
        return (0);

    const filtered = moviesArray.filter(element => 
        element.director === "Steven Spielberg" &&
        element.genre.includes("Drama")
    );
    return (filtered.length);
}
// console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let total = 0;
    let avg = 0;

    if (!moviesArray || moviesArray.length === 0)
        return (0);

    moviesArray.forEach(element => {
        if (typeof element.score === `number`){
            total += element.score;
        }
    });

    avg = total / moviesArray.length;

    return Number(avg.toFixed(2));
}
// console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let total = 0;
    let avg = 0;

    const filtered = moviesArray.filter(element =>
        element.genre.includes("Drama")
    );

    if (filtered.length == 0) return (0);
    
    filtered.forEach(element => {
        if (typeof element.score === 'number')
            total += element.score;
    });
    
    avg = total / filtered.length;

    return Number(avg.toFixed(2));
}
// console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArr = [...moviesArray];

    clonedArr.sort((a, b) => {
        if (a.year != b.year)
            return (a.year - b.year);
        else
            return (a.title.localeCompare(b.title));
    });

    return (clonedArr);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const titles = moviesArray.map(element => element.title);
    
    titles.sort((a, b) => a.localeCompare(b));
    
    return (titles.splice(0, 20));
}
// console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const clonedMovie = { ...movie };

    const durationStr = clonedMovie.duration;
    let totalMinutes = 0;

    const hourMatch = durationStr.match(/(\d+)h/);
    const minMatch = durationStr.match(/(\d+)min/);

    if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
    if (minMatch) totalMinutes += parseInt(minMatch[1]);

    clonedMovie.duration = totalMinutes;
    return clonedMovie;
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
