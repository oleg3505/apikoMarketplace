import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

axios.defaults.baseURL = 'https://apiko-intensive-backend.herokuapp.com';
// axios.defaults.baseURL = '/api';

export const Auth = {
  _token: null,

  async setToken(token) {
    this._token = token;
    await SecureStore.setItemAsync('__token', token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  logout() {
    this._token = null;
    SecureStore.deleteItemAsync('__token');
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post('/auth/login', {
      email,
      password,
    });
  },
  register({ email, password }) {
    return axios.post('/auth/register', {
      email,
      password,
    });
  },
};

export const Account = {
  getUser(token) {
    return axios.get('/account', {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getUserById(id) {
    return axios.get(`/user/${id}`);
  },
};

export const Products = {
  fetchLatest() {
    return axios.get('/products/latest');
  },
  fetchMore({ from, limit }) {
    return axios.get(`/products/latest?from=${from}&limit=${limit}`);
  },
  getById(id) {
    return axios.get(`products/${id}`);
  },

  postProduct(token, body) {
    return axios.post('/products', {
      headers: { Authorization: `Bearer ${token}` },
      data: body,
    });
  },
};
