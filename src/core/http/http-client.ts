import axios, {
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { HttpError } from './http';
import { API_URL } from '../../config';
import { getSession } from '../auth/session';

const getAccessToken = (): string | null => {
  const session = getSession();
  return session ? session.token : null;
};

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    const tokenHeaderValue = `Bearer ${accessToken}`;
    config.headers = {
      ...config.headers,
      Authorization: tokenHeaderValue,
    } as AxiosRequestHeaders;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => res.data,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const response: AxiosResponse = error.response;

      return Promise.reject(
        new HttpError(response.status, response.statusText, response.data),
      );
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
