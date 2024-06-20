import { defineStore } from 'pinia';
import axios from 'axios';

interface User {
  name: string;
  photo: string;
  uid: string;
  level: string;
  moments_count: number;
  follow_count: number;
  fans_count: number;
  account: string;
  password: string;
  active: boolean;
}

interface UserState {
  users: User[];
  currentUser: User | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('/userinfo.json');
        if (Array.isArray(response.data)) {
          this.users = response.data;
        } else {
          console.error('Error: Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    login(account: string, password: string) {
      const user = this.users.find(user => user.account === account && user.password === password);
      if (user) {
        this.currentUser = user;
        user.active = true; // 设置用户为激活状态
        return true;
      } else {
        alert('账号或密码错误');
        return false;
      }
    },
    logout() {
      if (this.currentUser) {
        this.currentUser.active = false; // 设置用户为非激活状态
      }
      this.currentUser = null;
    },
  },
});