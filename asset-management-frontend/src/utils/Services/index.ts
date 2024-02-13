import axios from 'axios';
import { defaultBaseUrl } from '../../constants/id';
import {
  logout,
  updateAccessToken,
  updateRefreshToken,
} from '../../slices/apiTokenSlice';
import { store } from '../store';

axios.defaults.baseURL = defaultBaseUrl;

axios.interceptors.request.use(
  (config) => {
    const { accessToken, refreshToken } = store.getState().auth;

    if (refreshToken && config.url?.includes('/admin/refresh_token')) {
      config.headers.Authorization = refreshToken;
    } else {
      if (accessToken) {
        console.log('Bearer ' + accessToken);

        config.headers.Authorization = accessToken;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,

  async (error) => {
    const errorMessage = error.response ? error.response.data.content : null;

    const originalRequest = error.config;

    if (errorMessage === 'Access token expired') {
      const { refreshToken } = store.getState().auth;

      const response = await axios.post(
        '/admin/refresh_token',
        {},
        {
          headers: {
            Authorization: refreshToken,
          },
          withCredentials: true,
        }
      );

      const data = response.data;
      const newAccessToken = data.content['access_token'];
      const newRefreshToken = data.content['refresh_token'];
      console.log('newRefreshToken', newRefreshToken);

      store.dispatch(updateAccessToken(newAccessToken));
      store.dispatch(updateRefreshToken(newRefreshToken));

      originalRequest.headers.Authorization = newAccessToken;

      return axios(originalRequest);
    } else if (errorMessage === 'Access restricted. Token expired') {
      store.dispatch(logout());
      window.location.href = '/';
    } else {
      return Promise.reject(error);
    }
  }
);

export default axios;
