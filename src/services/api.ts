import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_API_URL;

const api = axios.create({
  baseURL: backendUrl,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export function isNetworkError(err: unknown): boolean {
  return axios.isAxiosError(err) && !err.response;
}

export default api;
