const chai = require('chai')
const movies = require('./index')
const { expect } = chai


describe('movies dataset', function() {
    
    it('should be an array', function() {
        expect(movies).to.be.a('array');
    });
  
    movies.map(movie => {
       
            it(movie.imdb+ ' should have required properties', function() {
                expect(movie).to.have.property("imdb").to.be.a('string')
                expect(movie).to.have.property("status").to.be.a('string')
                expect(movie).to.have.property("title").to.be.a('string')
                expect(movie).to.have.property("year").to.be.a('string')
                expect(movie).to.have.property("runtime").to.be.a('string')
                expect(movie).to.have.property("story").to.be.a('string')
                //expect(movie).to.have.property("director");
                //expect(movie).to.have.property("writers");
                //expect(movie).to.have.property("stars");
                expect(movie).to.have.property("genre").to.be.a('array')
                expect(movie).to.have.property("rating").to.be.a('string')
                expect(movie).to.have.property("related").to.be.a('array')
                expect(movie).to.have.property("aoMeta").to.be.a('object')
                expect(movie).to.have.property("aoFiles").to.be.a('array')
                expect(movie).to.have.property("identifier").to.be.a('string')
                expect(movie).to.have.property("archiveDownloadCount").to.be.a('number')
                expect(movie).to.have.property("wiki").to.be.a('string')
                expect(movie).to.have.property("storyFrom").to.be.a('string')
            });
        
        it(movie.imdb + ' should have at least one valid video link', function () { 
          
                expect(movie.aoFiles[0]).to.have.property("url").to.be.a('string')
                expect(movie.aoFiles[0]).to.have.property("format").to.be.a('string')
                expect(movie.aoFiles).to.satisfy(checkIfValidVideoForWeb)
            })
           
      
        })
       
   
      
});
  
function checkIfValidVideoForWeb(video) {
    return video.filter(v=>v.url.indexOf('mp4')>-1)[0]
}