import axios from 'axios';

import {API_URL, JWT_TOKEN} from '../config';
import {getValue, removeValue} from './storageUtil';

export const httpBase = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    responseType: 'json',
  });

  api.interceptors.response.use(
    (response) => {
      console.log('[API RESPONSE] -> config: ', response);
      return response;
    },
    async (error) => {
      console.log('[API RESPONSE] -> error: ', error.request);

      if (
        error.request._hasError === true &&
        error.request._response.includes('connect')
      ) {
        console.log(
          '📶 could not connect to our server. Check internet connection',
        );
      }

      if (error.response.status === 401) {
        const config = error.config;
        removeValue(JWT_TOKEN);

        return axios(config);
      }

      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    async (config) => {
      const jwt_token = await getValue(JWT_TOKEN);

      if (jwt_token) {
        config.headers.Authorization = `Bearer ${jwt_token}`;
      }

      console.log('[API REQUEST] -> config: ', config);
      return Promise.resolve(config);
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return api;
};
