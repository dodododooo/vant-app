import axios, { AxiosRequestConfig } from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config: AxiosRequestConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (conf) => conf,
  (err) => Promise.reject(err)
);

// Add a response interceptor
instance.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default instance;
