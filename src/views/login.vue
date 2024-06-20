<template>
  <statusBar/>
  <div style="height: 54px;"></div>
  <header style="width: 393px;height: 60px;flex-shrink: 0;background: #FFF;box-shadow: 0px 0px 1px 0px rgba(0, 2, 0, 0.25);">
    <!-- <button @click="comeBackCompany" style="display: table-cell;vertical-align: middle;">
      <img class="returnButton" alt="return" src="../assets/static/Return.svg" />
    </button> -->
    <van-nav-bar
    title=""
    left-text="返回"
    left-arrow
    @click-left="onClickReturn"
    />

  </header>

  <body style="position:fixed;">
    <div class="title">
      <img alt="logo" src="../assets/static/logo 1.png" />
      <span class="welcome">：欢迎大驾光临 「日雀」迷因食堂</span>
    </div>
    <div class="choose">
      <div class="choice1">登录</div>
      <div class="choice2">注册</div>
    </div>
    <div class="main">
      <div class="form">
          <!-- 可以使用 CellGroup 作为容器 -->
          <van-cell-group inset style="padding: 10px;">
            <van-field class="field" v-model="account" label="账号" placeholder="请输入账号" style="margin-top: 40px;"/>
            <van-field class="field" v-model="password" type="password" label="密码" placeholder="请输入密码" style="margin-top: 20px;"/>
            <van-button type="default" @click="login" size="large" color="#39C5BB" style="margin-top:30px;
            color: #FFF;text-align: center;font-size: 24px;font-weight: 1000;">登录</van-button>
         </van-cell-group>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useUserStore } from '../stores/user';

import statusBar from '@/components/statusBar.vue';

const account = ref('');
const password = ref('');

const router = useRouter();
const userStore = useUserStore();

const onClickReturn = () => {
  history.back();
}

const login = async () => {
  const success = await userStore.login(account.value, password.value);
  if (success) {
    router.push('/user');
  }
};

onMounted(() => {
  userStore.fetchUsers();
});
</script>



<style>
  
  button{
	/* 清除默认边框 */
	border:0;
	outline:none;
   /*清除默认背景 */
  background-color: transparent;
	}

  .returnButton{
    margin-left: 16px;
    margin-top: 14px;
  }

  .background{
    display: block;
    width: auto;  
    height: auto;  
    width:100%;
    margin-top: -125px;
  }

  .content{
    position: fixed;
    z-index: -1;
    background-image: url("../assets/static/background.png");
    background-size: 100%;
    background-position-y: -225px;
    width: 393px;
    height:738px;
  }

  .title{
    display:flex;
    padding-top: 28px;
    margin-bottom: 24px;
  }

  .welcome{
    display: flex;
    width: 278px;
    height: 118px;
    margin-left: -24px;
    margin-top: 16px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #39C5BB;
    font-family: "SF Pro";
    font-size: 34px;
    font-style: normal;
    font-weight: 560;
    line-height:50px;
    border-style:none;
    background:transparent;
  }
  
  .choose{
    height: 58px;
    border-radius: 24px 24px var(--money, 0px) var(--money, 0px);
    background: #F4F4F4;
    box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }

  div[class^="choice"]{
    display: table-cell;
    text-align: center;
    font-family: "SF Pro";
    font-size: 28px;
    font-style: normal;
    font-weight: 1000;
    line-height: normal;
    text-align:center;
    vertical-align: middle;
  }

  .choice1{
    width: 196px;
    height: 58px;
    border-radius: 24px 24px var(--money, 0px) var(--money, 0px);
    background: #FFF;

    color: #E73B8C;
  }

  .choice2{
    margin-left: 50%;
    width: 196px;
    height: 58px;
    border-radius: 24px 24px var(--money, 0px) var(--money, 0px);

    color: #39C5BB;
  }

  .main{
    height:480px;
    background-color: #FFF;
    width:393px;
  }

  .field{
    width: 342px;
    border-left: 1px solid #39C5BB;
    border-bottom: 1px solid #39C5BB;
    border-radius: 4px;
  }

  :root:root {
  --van-nav-bar-height:60px;
  --van-nav-bar-icon-color:#E73B8C;
  --van-nav-bar-text-color:var(--van-nav-bar-icon-color);
  }
</style>