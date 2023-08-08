import { BASE_URL } from "./constans";

class mainApi {
  constructor ({url, headers}) {
    this._url = url;
    this._headers = headers;
    this._token = null;
  }

  // Установка токена
  setToken(token) {
    this._token = token;
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${token}`
    }
  }

  register = (userData) => fetch(`${this._url}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(this._checkServerResponse);

  authorize = (userData) => fetch(`${this._url}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(this._checkServerResponse)

  // Проверка ответа сервера после запроса
  _checkServerResponse(res) {
      if (res.ok) {
        return res.json();
      }
      // return Promise.reject(`Ошибка: ${res.status}`);
      return Promise.reject(res.status);
  };

  // Загрузка информации о пользователе с сервера
  getUser(token) {
    if (token) this.setToken(token);
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkServerResponse)
  }

  // Замена данных пользователя
  changeProfile(data) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
    })
    .then(this._checkServerResponse)
  }

   // Получение фильмов, сохраненных пользователем
   getUserMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkServerResponse)
  }

  // Добавление фильма
  postMovie(data) {
    return fetch(`${this._url}/movies`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: `https://api.nomoreparties.co${data.image.url}`,
          trailerLink: data.trailerLink,
          thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
          movieId: data.id.toString(),
          nameRU: data.nameRU,
          nameEN: data.nameEN,
        })
    })
    .then(this._checkServerResponse)
  }

  // Удаление фильма
  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
        method: 'DELETE',
        headers: this._headers,
    })
    .then(this._checkServerResponse)
  }

}

const token = localStorage.getItem("token");

export const api = new mainApi({
  url: BASE_URL,
  headers: {
    authorization:  `Bearer ${token}`,
    'content-type': 'application/json'
  }
});
