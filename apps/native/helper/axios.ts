import axios from 'axios';

import { SERVER_URL } from '~/config/env';
import { getAccessToken } from '~/utils/store';

const axiosInstance = axios.create({
  baseURL: SERVER_URL || 'http://192.168.1.4:3001/api/v1',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors to handle authorization and errors globally
axiosInstance.interceptors.request.use(
  async (config) => {
    const access_token = await getAccessToken();
    if (access_token) {
      config.headers.Cookie = `access_token=${access_token}`;
      console.log(config.headers.Cookie);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes globally
    if (error.response) {
      if (error.response.status === 401) {
        // Unauthorized access - perhaps logout user
        console.log('Unauthorized, logging out...');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
