export const BASE_URL = 'https://auth.nomoreparties.co';

export const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  export const responce = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  export const register = ({ email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    })
    .then(res => responce(res));
  };

  export const authorize = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => responce(res));
  };