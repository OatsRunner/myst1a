<template>
    <statusBar/>
    <div style="height: 54px;"></div>
    <header style="width: 393px;height: 60px;flex-shrink: 0;background: #FFF;box-shadow: 0px 0px 1px 0px rgba(0, 2, 0, 0.25);">
      <van-nav-bar
      title=""
      left-text="返回"
      left-arrow
      @click-left="onClickReturn"
      />
  
    </header>
  
    <body style="position:fixed;">
        <van-row justify="center" style="margin-top:128px">
            <div style="width: 100%;margin:auto">
                <img alt="logo" src="../assets/static/logo 1.png"style="display:flex;margin:auto">
            </div>
            <div style="width: 100%;text-align: center;color:#39C5BB;font-size: xx-large">:404</div>
            <div style="width: 100%;text-align: center;color:#39C5BB;font-size: xx-large">啊哦，页面还在开发中喵</div>
        </van-row>
        <div style="margin-top:196px">
            <button @click="returnHome" style="display:flex;margin:auto;color:#E73B8C;font-size: 18px;text-decoration: underline">返回首页</button>
        </div>
    </body>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { reactive, onMounted } from 'vue';
  import statusBar from '../components/statusBar.vue';
  import { ref } from 'vue';
  
  const props = defineProps({});
  
  const data = reactive({});
  
  const router = useRouter();
  
  const onClickReturn = () =>{
    history.back();
  }

  const returnHome = () =>{
    router.push('/home');
  }
  
  import activehomeIcon from '@/assets/static/homeIconActive.svg'
  import inactivehomeIcon from '@/assets/static/homeIconInactive.svg'

  import activeshopIcon from '@/assets/static/shopIconActive.svg'
  import inactiveshopIcon from '@/assets/static/shopIconInactive.svg'

  import activeuserIcon from '@/assets/static/userIconActive.png'
  import inactiveuserIcon from '@/assets/static/userIconInactive.png'
    
  const searchvalue=ref('')

  const active = ref(0);
  const iconHome = {
    active:activehomeIcon,
    inactive:inactivehomeIcon,
  };
  const iconShop = {
    active:activeshopIcon,
    inactive:inactiveshopIcon,
  };
  const iconUser = {
    active:activeuserIcon,
    inactive:inactiveuserIcon,
  };
</script>
  
<style>
</style>