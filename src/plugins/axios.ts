import axios from 'axios';

// 创建一个 axios 实例
const apiClient = axios.create({
  baseURL: 'https://api.example.com', // 默认基础 URL
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default apiClient;
