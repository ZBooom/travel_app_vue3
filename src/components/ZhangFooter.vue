<!--
作者：张祈健
时间：2025年5月22日
功能：底部导航栏组件，包含5个导航图标及对应文字，高度复用组件
-->
<template>
    <div class="zqj-footer">
        <div class="zqj-nav-item" v-for="item in zqjNavList" :key="item.text" @click="zqjHandleNavClick(item)"
            :class="{ 'zqj-active': zqj_isCurrentRoute(item.url) }">
            <van-icon class-prefix="my-icon" :name="item.icon" class="zqj-icon" />
            <p class="zqj-text">{{ item.text }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Props支持自定义导航项
const props = defineProps({
    customNavList: {
        type: Array,
        default: () => []
    }
});

// 默认导航数据
const defaultNavList = [
    { text: '首页', icon: 'hanglvzongheng1', url: '/' },
    { text: '行程', icon: 'hangcheng1', url: '/itinerary' },
    { text: '经验', icon: 'jingyan1', url: '/exp' },
    // { text: '航班动态', icon: 'hangbandongtai1', url: '/fstatus' },
    { text: '我', icon: 'wo1', url: '/mine' }
];

// 使用自定义导航或默认导航
const zqjNavList = ref(props.customNavList.length > 0 ? props.customNavList : defaultNavList);

// 判断是否为当前路由
const zqj_isCurrentRoute = (url) => {
    return route.path === url;
}

const zqjHandleNavClick = (item) => {
    router.push(item.url);
}
</script>

<style scoped>
.zqj-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
}

.zqj-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1;
    gap: 4px;
    cursor: pointer;
}

.zqj-icon {
    font-family: 'iconfont';
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 0;
}

.zqj-text {
    font-size: 12px;
    color: #666;
}

.zqj-active .zqj-icon {
    color: #4cd964;
}

.zqj-active .zqj-text {
    color: #4cd964;
}
</style>