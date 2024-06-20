import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {
      name: 'default',
      photo: '',
      uid: '0',
      level: '0',
      moments_count: 0,
      follow_count: 0,
      fans_count: 0,
    }
  }),
  actions: {
    setUserInfo(data: any) {
      this.userInfo = data;
    },
    async fetchUserInfo() {
      try {
        const response = await axios.get('/userinfo.json'); // 从本地 JSON 文件获取数据
        this.setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    }
  }
});