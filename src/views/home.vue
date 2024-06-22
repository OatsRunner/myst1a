<template>
    <statusBar style="background-color: #DC6683;"/>
    <div style="height: 54px;"></div>
    <header style="width: 393px;height: 90px;flex-shrink: 0;background: #DC6683;box-shadow: 0px 0px 1px 0px rgba(0, 2, 0, 0.25);">
        <div style="height:40px">
            <img class="logo" alt="logo" src="../assets/static/logo 1.png" />
            <span style="float:left;color: white;font-size: 20px;align-items: center;padding-top: 8px;">日雀迷因食堂</span>
        </div>
        <van-search
        v-model="searchvalue"
        shape="round"
        background="#DC6683"
        placeholder="请输入搜索关键词"
        />
    </header>
    <body>
        <van-tabs v-model:active="active" color=#DC6683>
            <van-tab title="推荐">
                <div class="swipe">
                <van-swipe class="swipe1" :autoplay="2000" indicator-color="white"
                :stop-propagation="false" >
                    <van-swipe-item @click="goto">
                        <van-cell-group inset>
                            <van-image
                            display:flex
                            width="360"
                            height="160"
                            fit="cover"
                            src="https://moegirl.icu/media/%E4%B9%89%E7%9C%BC%E4%B8%81%E7%9C%9F.jpg" 
                            />
                            <van-cell-group  class="van-ellipsis">
                            <van-cell title="什么是「oo丁真，鉴定为xx」"  label="「一眼丁真」系列用語，衍生自貼吧流行的「一眼真」、「一眼假」等簡明回復，指的是對網絡上所充斥着的各種真假信息的快速辨別。因為疫情期間一系列魔幻現實主義事件的上演，常常會有網友出於寧可信其有的心態，用「一眼真」來評價此類事件，以表達對現實中魔幻事件的諷刺。" size="large"/>
                            </van-cell-group>
                        </van-cell-group>
                    </van-swipe-item>
                    <van-swipe-item @click="goto">
                        <van-cell-group inset>
                            <van-image
                            display:flex
                            width="360"
                            height="160"
                            fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                            />
                            <van-cell-group  class="van-ellipsis">
                            <van-cell title="什么是「oo丁真，鉴定为xx」"  label="「一眼丁真」系列用語，衍生自貼吧流行的「一眼真」、「一眼假」等簡明回復，指的是對網絡上所充斥着的各種真假信息的快速辨別。因為疫情期間一系列魔幻現實主義事件的上演，常常會有網友出於寧可信其有的心態，用「一眼真」來評價此類事件，以表達對現實中魔幻事件的諷刺。" size="large"/>
                            </van-cell-group>
                        </van-cell-group>
                    </van-swipe-item>
                    <van-swipe-item @click="goto">
                        <van-cell-group inset>
                            <van-image
                            display:flex
                            width="360"
                            height="160"
                            fit="cover"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                            />
                            <van-cell-group  class="van-ellipsis">
                            <van-cell title="什么是「oo丁真，鉴定为xx」"  label="「一眼丁真」系列用語，衍生自貼吧流行的「一眼真」、「一眼假」等簡明回復，指的是對網絡上所充斥着的各種真假信息的快速辨別。因為疫情期間一系列魔幻現實主義事件的上演，常常會有網友出於寧可信其有的心態，用「一眼真」來評價此類事件，以表達對現實中魔幻事件的諷刺。" size="large"/>
                            </van-cell-group>
                        </van-cell-group>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="exhibition">
                <van-list
                v-model:loading="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                    <div class="water-fall">
                        <van-cell size="large" class="list_item" v-for="(item, index) of list" :key="index" 
                        style="margin-bottom: 10px;
                        border-radius: 8px;" to="/404"
                        >   
                            <van-image position="center" lazy-load :src="item?.url" radius="4"/>
                            <div class="item-title">{{ item?.key }}</div>
                            <div class="item-intro">{{ item?.intro }}</div>
                        </van-cell>
                    </div>
                </van-list>
            </div>
            <van-back-top right="5vw" bottom="10vh" style="background-color: #E73B8C;"/>
            </van-tab>
            <van-tab title="最新" >404</van-tab>
            <van-tab title="热榜" >404</van-tab>
            <van-tab title="订阅" disabled>订阅</van-tab>
            <van-tab title="收藏夹" disabled>收藏夹</van-tab>
        </van-tabs>

        
    </body>

    <van-tabbar v-model="active" route style="width: 393px;">
        <van-tabbar-item to="/home">
            <span>首页</span>
            <template #icon="props">
            <img :src="props.active ? iconHome.active : iconHome.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/404">
            <span>商店</span>
            <template #icon="props">
            <img :src="props.active ? iconShop.active : iconShop.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item to="/user">
            <span>我的</span>
            <template #icon="props">
            <img :src="props.active ? iconUser.active : iconUser.inactive" />
            </template>
        </van-tabbar-item>
    </van-tabbar>

</template>

<script setup lang='ts'>

    import { useRouter } from 'vue-router';
    import { reactive, onMounted } from 'vue';
    import { ref } from 'vue';
    import axios from'axios';

    import statusBar from '@/components/statusBar.vue';

    import activehomeIcon from '@/assets/static/homeIconActive.svg'
    import inactivehomeIcon from '@/assets/static/homeIconInactive.svg'

    import activeshopIcon from '@/assets/static/shopIconActive.svg'
    import inactiveshopIcon from '@/assets/static/shopIconInactive.svg'

    import activeuserIcon from '@/assets/static/userIconActive.png'
    import inactiveuserIcon from '@/assets/static/userIconInactive.png'
import router from '@/router';
    
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

    const loading = ref(false);
    const finished = ref(false);

    const list :any=ref([]);

const fetchListData = async () => {
  try {
    const response = await axios.get('../../public/waterfall.json');
    list.value = response.data;
  } catch (error) {
    console.error('Error fetching list data:', error);
  }
};

const onLoad = () => {
  loading.value = true;
  setTimeout(() => {
    fetchListData();
    loading.value = false;
    finished.value = list.value.length >= 10;
  }, 1000);
};

onMounted(() => {
  onLoad();
});

const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  onLoad();
};


    const goto=()=>{
        router.push('/404');
    }

</script>

<style>
    .logo{
        float: left;
        width:32px;
        margin-left:16px;
        margin-top:8px;
    }
    body{
        background-image: url('@/assets/static/background.png');
        background-size:cover;
        background-attachment:fixed;
        width: 393px;
    }
    .swipe{
        margin-top: 10px;
    }
    .exhibition{
        overflow-y: auto; 
        padding: 10px; 
        padding-bottom:60px ;
    }

    .water-fall {
        padding-top: 10px;
        column-count: 2;
        column-gap: 5px;
        width: 100%;
        margin: 0 auto;
    }
    .list_item {
        box-sizing: border-box;
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: 15px;
        background-color: #FFF     
    } 
    .item-title {
        text-align: left;
        font-size: 16px;
        color: black;
    }
    .item-intro{
        text-align: left;
        padding-bottom: 4px;
        font-size: 14px;
    }
    :root:root {
        --van-tabbar-height:73px;
        --van-tabbar-item-active-color:#DC6683;
        --van-search-input-height:32px;
  }
</style>
