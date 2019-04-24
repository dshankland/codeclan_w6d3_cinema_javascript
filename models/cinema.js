const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmTitles = function() {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.findFilmByTitle = function(title) {
  const result = this.films.find((film) => {
    return film.title === title;
  });
  return result;
};

Cinema.prototype.filterFilmsByGenre = function(genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result;
};

Cinema.prototype.hasFilmsInYear = function(year) {
  const result = this.films.some((film) => {
    return film.year === year;
  });
  return result;
};

Cinema.prototype.filmRuntime = function(length) {
  const result = this.films.every((film) => {
    return film.length > length;
  });
  return result;
};

Cinema.prototype.totalFilmsRuntime = function() {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + (film.length);
  }, 0);
  return result;
};

Cinema.prototype.filterFilmsByProperty = function(property, value) {
  const result = this.films.filter((film) => {
    return film[property] === value;
  });
  return result;
};

module.exports = Cinema;
