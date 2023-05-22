// @flow
import axios from 'axios';


// appUrl is a global variable. See resources/views/index.blade.php
// export const BASE_URL = `${window.appUrl}/api`;
export const BASE_URL = 'http://localhost:4000/api/v1';

const reactApi = axios.create({
  baseURL: BASE_URL,
});

reactApi.interceptors.request.use(config => {
  // const token = localStorage.getItem('token');
  // config.headers = {
  //   Authorization: `Bearer ${token.replace('"',"")}`,
  //   // 'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // };
  return config;
});


reactApi.interceptors.response.use(
  response => response,
  error => {
    if (
      error.response &&
      error.response.status === 401 &&
      (!error.response.config ||
        error.response.config.url !== BASE_URL + '/login')
    ) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);



export default reactApi;
