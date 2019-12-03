const fs = require('fs');
const movies = require('./dataset/movies')
const exclusions = require('../exclude')
let allMovies = [...movies]
let skippedMovies = []

// Add new movies
fs.readdirSync(__dirname +"/addNew").forEach(file => {
    const newMovie = require('./addNew/' + file)
    const newMovieExistInMovies = movies.filter(m => m.imdb === newMovie.imdb)[0]
    
    if (!newMovieExistInMovies) {
        allMovies.push(newMovie)
    } else {
        skippedMovies.push(newMovie)
        fs.writeFileSync(__dirname +"/../dist/error-skipped", JSON.stringify(skippedMovies))
        console.warn('Skipping ' +newMovie.imdb +': already exists')
    }
})


// Exculde movies
const filterMovies = allMovies
    .filter(movie => exclusions.indexOf(movie.imdb) === -1)

fs.writeFileSync(__dirname +"/../dist/movies_dist.json", JSON.stringify(filterMovies))
console.log('[MOVIES LENGTH] ', filterMovies.length)

