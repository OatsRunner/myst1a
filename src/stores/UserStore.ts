import { reactive } from 'vue';

const UserStore = reactive({
  state: {
    loggedIn: false,
    user: null
  },
  login() {
    // 登录逻辑
  },
  logout() {
    // 登出逻辑
  },
  updateUser(user) {
    // 更新用户信息逻辑
  }
});

export default UserStore;
