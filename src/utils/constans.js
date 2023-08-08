const { NODE_ENV } = process.env;

export const BASE_URL = NODE_ENV === 'development' ? 'http://localhost:3333' : 'https://api.ivandiplom.nomoreparties.sbs';