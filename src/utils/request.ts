// 导入 axios  npm install axios
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

// 定义一个变量，记录公共的前缀 baseURL
const baseURL: string = 'http://localhost:8080';

// 创建 axios 实例
const instance: AxiosInstance = axios.create({ baseURL });

// 添加响应拦截器
instance.interceptors.response.use(
  (result: AxiosResponse) => {
    return result.data;
  },
  (err: any) => {
    alert('服务异常');
    return Promise.reject(err); // 异步的状态转化成失败的状态
  }
);

export default instance;
