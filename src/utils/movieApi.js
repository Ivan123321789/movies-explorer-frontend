export const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
 
const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject('Ошибка: $(res.status)');
}

export const getMovies = () =>  fetch(`${MOVIE_URL}`).then(getResponse);