const fs = require('fs');
const movies = require('./originalDataset/movies')
const exclusions = require('../exclude')
const filterMovies = movies
    .filter(movie => exclusions.indexOf(movie.imdb) === -1)

fs.writeFileSync(__dirname +"/../dist/movies_dist.json", JSON.stringify(filterMovies))
console.log('[MOVIES LENGTH] ', filterMovies.length)