import { defineStore } from 'pinia';
import axios from 'axios';

interface UserState {
  userInfo: {
    name: string;
    email: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUserInfo() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('/api/user/info'); // 假设你的用户信息 API 地址是 /api/user/info
        this.userInfo = response.data;
      } catch (error) {
        this.error = 'Failed to fetch user info';
      } finally {
        this.loading = false;
      }
    },
    async updateUserInfo(newInfo: { name: string; email: string }) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post('/api/user/update', newInfo); // 假设你的更新用户信息 API 地址是 /api/user/update
        this.userInfo = response.data;
      } catch (error) {
        this.error = 'Failed to update user info';
      } finally {
        this.loading = false;
      }
    }
  }
});
