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
        <div class="swipe">
                <van-swipe class="swipe1" :autoplay="2000" indicator-color="white">
                    <van-swipe-item>
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
                    <van-swipe-item>
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
                    <van-swipe-item>
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
                <div inset size="large" class="list_item" v-for="(item, index) of list" :key="index" 
                style="margin-bottom: 10px;
                border-radius: 4px;"
                >
                <van-image lazy-load :src="item.url" />
                <div class="item-title">{{ item.key }}</div>
                <div class="item-intro">{{ item.intro }}</div>
            </div>
            </div>
            </van-list>
            <van-back-top/>
        </div>
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
        <van-tabbar-item to="/login">
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

    import statusBar from '@/components/statusBar.vue';

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

    const list = ref([
  {
    url: 'https://placekitten.com/400/300',
    key: '芝士雪豹',
    intro:'人们依然爱我爱我纯真双眼'
  },
  {
    url: 'https://placekitten.com/400/300',
    key: '芝士猫咪',
    intro:'人们依然爱我爱我纯真双眼'
  },
  {
    url: 'https://placekitten.com/400/300',
    key: '芝士獐子',
    intro:'人们依然爱我爱我纯真双眼'
  },
  {
    url: 'https://placekitten.com/400/300',
    key: '芝士猞猁',
    intro:'人们依然爱我爱我纯真双眼'
  }
])
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
    // 获取更多的图片数据，追加到列表中
        for (let i = 0; i < 5; i++) {
            list.value.push({
            url: 'https://placekitten.com/400/300',
            key: '芝士王源子',
        intro:'人们依然爱我爱我纯真双眼'
        },
        {
            url: 'https://placekitten.com/400/300',
            key: '锐克5代',
            intro:'人们依然爱我爱我纯真双眼'
        },
        {
            url: 'https://placekitten.com/400/300',
            key: '芝士珍珠',
            intro:'人们依然爱我爱我纯真双眼'
        },
        {
            url: 'https://placekitten.com/400/300',
            key: '是妈妈省的',
            intro:'人们依然爱我爱我纯真双眼'
        })
            }

            // 加载状态结束
            loading.value = false

            // 数据全部加载完成
            if (list.value.length >= 40) {
            finished.value = true
            }
        }, 1000)
    };

    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };

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
        overflow-y: auto; /* Ensure the container is scrollable */
        padding: 10px; /* Optional: Add padding for better layout */
        padding-bottom:60px ;
    }
    .swipe1 .van-swipe-item {

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
        margin-left: 10px;
        font-size: 16px;
    }
    .item-intro{
        padding-bottom: 4px;
        margin-left: 12px;
        font-size: 14px;
    }
    :root:root {
        --van-tabbar-height:73px;
        --van-tabbar-item-active-color:#DC6683;
        --van-search-input-height:32px;
  }
</style>
