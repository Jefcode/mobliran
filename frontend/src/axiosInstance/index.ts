import axios, { AxiosRequestConfig } from 'axios';

import { baseUrl } from './constants';

interface jwtHeader {
  Authorization?: string;
}

export function getJWTHeader(token: string): jwtHeader {
  return { Authorization: `Bearer ${token}` };
}

const config: AxiosRequestConfig = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);
