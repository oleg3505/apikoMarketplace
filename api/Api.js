import axios from 'axios';

// axios.defaults.baseURL = ''

export const Auth = {
  login(email, password) {
    return axios.post(
      'https://apiko-intensive-backend.herokuapp.com/auth/login',
      {
        email,
        password,
      },
    );
  },
  register(email, password) {
    return axios.post(
      'https://apiko-intensive-backend.herokuapp.com/auth/register',
      {
        email,
        password,
      },
    );
  },
};
