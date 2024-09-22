// api.ts
import axios from 'axios';

import { SERVER_URL } from '~/config/env';

const axiosInstance = axios.create({
  baseURL: SERVER_URL, // Replace with your API base URL
  timeout: 10000, // Timeout after 10 seconds
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you may need (like Authorization tokens)
  },
});

// Optional: Add request interceptors to attach tokens or handle errors globally
axiosInstance.interceptors.request.use(
  (config) => {
    // You can attach authorization token here
    // const token = yourTokenService.getToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add response interceptors for error handling or response manipulation
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    if (error.response.status === 401) {
      // Handle unauthorized access (e.g., logout)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
