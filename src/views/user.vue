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
    <body>
        <div class="my">
            <!-- 个人信息区域 -->
            <div class="top">
                <div class="msg" style="background-color: #FFF;">
                    <van-cell-group>
                        <van-rou>
                            <van-col span="8">
                                <img @click="$router.push('/404')" alt="avater" :src="userInfo.photo"/>
                                <div class="name">{{ userInfo.name }}</div>
                            </van-col>
                            <van-col span="8">
                                <span style="margin-left:24px;">Lv:{{ userInfo.level }}</span>
                                <span style="margin-left:24px;">uid:{{ userInfo.uid }}</span>
                            </van-col>
                        </van-rou>
                    </van-cell-group>
                </div>
                <div class="other">
                    <van-cell-group>
                        <van-row justify="center">
                            <van-col span="8">
                                    <div class="count">{{userInfo.moments_count}}</div>
                                    <div class="txt">动态</div>
                            </van-col>
                            <van-col span="8">
                                    <div class="count">{{userInfo.follow_count}}</div>
                                    <div class="txt">关注</div>
                            </van-col>
                            <van-col span="8">
                                    <div class="count">{{userInfo.fans_count}}</div>
                                    <div class="txt">粉丝</div>
                            </van-col>
                        </van-row>                        
                    </van-cell-group>
                    
                </div>
            </div>
            <!-- 收藏区域 -->
            <van-grid :column-num="3">
            <van-grid-item icon="star-o" text="我的收藏" is-link to="/404"/>
            <van-grid-item icon="clock-o" text="浏览历史" is-link to="/404"/>
            <van-grid-item icon="orders-o" text="编辑记录" is-link to="/404"/>
            </van-grid>
            <!-- 信息区域 -->
            <van-cell-group>
            <van-cell title="消息通知" is-link to="/404" />
            <van-cell title="用户反馈" is-link to="/404" />
            <van-cell title="消息通知" is-link to="/404" />
            <van-cell title="用户反馈" is-link to="/404" />
            </van-cell-group>
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
    import statusBar from '../components/statusBar.vue';
    import { ref } from 'vue';
    import axios from 'axios';

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

    const onClickReturn = () =>{
    history.back();
    }

    const userInfo = reactive({
        name: 'default',
        photo: '',
        uid:'0',
        level:'0',
        moments_count: 0,
        follow_count: 0,
        fans_count: 0
    });

    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/userinfo');
            Object.assign(userInfo, response.data);
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    onMounted(() => {
        fetchUserInfo();
    });
</script>

<style>
    .name{
        margin-top:4px;
        float:right;
        font-family: 'SF-Pro';
        vertical-align:bottom;
        justify-content:center;
        font-size: 20px;
    }
    .count{
        margin-top:4px;
        display: flex;
        vertical-align:bottom;
        justify-content:center;
        font-size: 18px;
    }
    .txt{
        display: flex;
        justify-content:center;
        margin-bottom:4px;
    }
</style>
