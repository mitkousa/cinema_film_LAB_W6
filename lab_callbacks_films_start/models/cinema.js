const Cinema = function (films) {
  this.films = films;
};
 
Cinema.prototype.listFilmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.filmByTitle = function (name) {
  return this.films.filter((film) => {
    if(film.title === name){
      return name
    }
  })
}

Cinema.prototype.filmByGenre = function (genre) {
  return this.films.filter((film) => {
    if(film.genre === genre){
      return genre
    }
  })
}

Cinema.prototype.filmByYear = function (year) {
  return this.films.filter((film) => {
    if(film.year === year){
      return year
    }
    else{
      return console.log("No films from this year")
    }
  })
}


module.exports = Cinema;
