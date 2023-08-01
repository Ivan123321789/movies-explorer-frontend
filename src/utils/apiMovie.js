export const MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
 
const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject('Ошибка: $(res.status)');
}

export const getMovies = () => {
  return fetch(`${MOVIE_URL}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then(getResponse);
}