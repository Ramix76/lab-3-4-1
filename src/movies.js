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

    if (!moviesArray.length) return (0);

    const filtered = moviesArray.filter(element => 
        element.director === "Steven Spielberg" &&
        element.genre.includes("Drama")
    );
    return (filtered.length);
}
// console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return (0);
    
    const total = moviesArray.reduce((sum, movie) => {
        return (sum + (movie.score || 0));
    }, 0);
    
    return (Number((total / moviesArray.length).toFixed(2)));

    // const avg = 0;
    // const total = 0;
    // moviesArray.forEach(element => {
    //     if (typeof element.score === `number`){
    //         total += element.score;
    //     }
    // });

    // avg = total / moviesArray.length;

    // return Number(avg.toFixed(2));
}
// console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const filtered = moviesArray.filter(element =>
        element.genre.includes("Drama")
    );
    
    if (!filtered.length) return (0);
    
    return (scoresAverage(filtered));
    
    // let total = 0;
    // filtered.forEach(element => {
    //     if (typeof element.score === 'number')
    //         total += element.score;
    // });
    
    // return (Number(total / filtered.length.toFixed(2)));
}
// console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) =>
        a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)
    );
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
//   return moviesArray.map(movie => {
//     const clonedMovie = { ...movie };

//     const durationStr = clonedMovie.duration;
//     let totalMinutes = 0;

//     const hourMatch = durationStr.match(/(\d+)h/);
//     const minMatch = durationStr.match(/(\d+)min/);

//     if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
//     if (minMatch) totalMinutes += parseInt(minMatch[1]);

//     clonedMovie.duration = totalMinutes;
//     return clonedMovie;
    
    return moviesArray.map(movie => {
        const clonedMovie = { ...movie };
        const durationStr = movie.duration || '';
        let totalMinutes = 0;

        const hours = durationStr.match(/(\d+)h/);
        const minutes = durationStr.match(/(\d+)min/);

        if (hours) totalMinutes += parseInt(hours[1]) * 60;
        if (minutes) totalMinutes += parseInt(minutes[1]);

        clonedMovie.duration = totalMinutes;
        return clonedMovie;
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;

    const yearScores = {};

    moviesArray.forEach((movie) => {
        if (!yearScores[movie.year]) yearScores[movie.year] = [];

        yearScores[movie.year].push(movie.score || 0);
    });

    let bestYear = null;
    let bestAverage = 0;

    for (let year in yearScores) {
        const average =
        yearScores[year].reduce((sum, score) => sum + score, 0) /
        yearScores[year].length;

        if (average > bestAverage) {
        bestAverage = average;
        bestYear = year;
        } else if (average === bestAverage) {
        bestYear = Math.min(bestYear, year);
        }
    }
    return `The best year was ${bestYear} with an average score of ${bestAverage}`;

    // if (!moviesArray.length) return (null);

    // const yearScores = {};

    // moviesArray.array.forEach(movie => {
    //     if (!yearScores[movie.score]) yearScores[movie.score] - [];

    //     yearScores[movie.score].push(movie.score || 0);
    // });

    // let bestYear = null;
    // let bestAvg = 0;

    // for(let year in yearScores){
    //     const avg = 
    //     yearScores[year].reduce((sum, score) => sum + score, 0) / 
    //     yearScores[year].length;

    //     if (avg > bestAvg){
    //         bestAvg = avg;
    //         bestYear = year;
    //     } else if (avg === bestAvg)
    //         bestYear = Math.min(bestYear, year);
    // }

    // return (`The best year was ${bestYear} with an average score of ${bestAvg}`);
}
