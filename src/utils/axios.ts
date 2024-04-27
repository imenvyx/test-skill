import axios, { AxiosRequestConfig } from 'axios';
// config
import { HOST_ONLINE_API } from 'src/config-global';
import { BASIC_TOKEN } from 'src/config-global';
// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_ONLINE_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const endpoints = {
  users: '/users',
  addUser: `/users?access-token=${BASIC_TOKEN}`,
  deleteUser: (id: string) => `/users/${id}?access-token=${BASIC_TOKEN}`,
};
