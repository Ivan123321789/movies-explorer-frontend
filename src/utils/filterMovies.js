const filterMoveis = (movies, search, isShort) => {
  return movies.filter((movie) => {
    const searchSymbols = movie.nameRU.toLowerCase().includes(search.toLowerCase()) || movie.nameEN.toLowerCase().includes(search.toLowerCase());
    const shortMovie = isShort ? movie.duration <= 40 : true;
    return searchSymbols && shortMovie;
  })
}