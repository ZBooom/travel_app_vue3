<!--
作者：张祈健
时间：2025年5月25日
功能：首页
-->
<template>
    <div class="zqj-index">
        <van-sticky>
            <div class="zqj_header" :class="{ 'zqj-header-scrolled': zqj_isScrolled }">
                <div class="zqj_left">
                    <van-icon class-prefix="my-icon" name="aizhushou" class="zqj_icon" />
                </div>
                <div class="zqj_center">
                    <van-search shape="round" placeholder="老人乘机攻略" input-align="center" readonly
                        background="transparent" @click="handleSearch" />
                </div>
                <div class="zqj_right">
                    <van-icon class-prefix="my-icon" name="plushuiyuan" class="zqj_icon" color="#FFD700" />
                    <van-icon class-prefix="my-icon" name="chat02" class="zqj_icon" dot />
                </div>
            </div>
        </van-sticky>
        <van-swipe class="zqj-adswipe" :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <div class="zqj-swipe-item-wrapper">
                    <img :src="image" />
                    <!-- 添加顶部阴影遮罩 -->
                    <div class="zqj-swipe-shadow"></div>
                </div>
            </van-swipe-item>
        </van-swipe>
        <!-- 功能入口图标栏 -->
        <ZhangEntryIconBar></ZhangEntryIconBar>
        <!-- 营销活动组件 -->
        <ZhangMarketing></ZhangMarketing>
        <ZhangFligtStatus />
        <ZhangBookingTab></ZhangBookingTab>

        <!-- 使用ZhangTab -->
        <div class="zqj-tab-wrapper">
            <ZhangTab :tabs="zqj_tabOptions" :defaultActive="0" :stickyTop="'54px'" @change="zqj_handleTabChange">
                <template #default="{ activeTab, activeIndex }">
                    <!-- 推荐tab显示瀑布流 -->
                    <div v-if="activeIndex === 0" class="zqj-tab-content-wrapper">
                        <ZhangWaterfall></ZhangWaterfall>
                    </div>
                    <!-- 其他tab显示404 -->
                    <div v-else class="zqj-404-content">
                        <div class="zqj-404-icon">📄</div>
                        <div class="zqj-404-title">404 - 暂无内容</div>
                        <div class="zqj-404-desc">{{ activeTab.label }}功能正在开发中，敬请期待</div>
                    </div>
                </template>
            </ZhangTab>
        </div>
    </div>
    <van-sticky>
        <ZhangFooter></ZhangFooter>
    </van-sticky>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ZhangBookingTab from '@/components/ZhangBookingTab.vue';
import ZhangEntryIconBar from '@/components/ZhangEntryIconBar.vue';
import ZhangFooter from '@/components/ZhangFooter.vue'
import ZhangMarketing from '@/components/ZhangMarketing.vue';
import ZhangWaterfall from '@/components/ZhangWaterfall.vue';
import ZhangTab from '@/components/ZhangTab.vue';
import ZhangFligtStatus from '@/components/ZhangFligtStatus.vue';

// 滚动状态
const zqj_isScrolled = ref(false)

// 使用本地图片
const images = [
    new URL('../assets/images/1.jpg', import.meta.url).href,
    new URL('../assets/images/2.jpg', import.meta.url).href,
    new URL('../assets/images/3.jpg', import.meta.url).href,
    new URL('../assets/images/4.jpg', import.meta.url).href,
];

// Tab选项配置
const zqj_tabOptions = ref([
    { key: 'recommend', label: '推荐' },
    { key: 'global-duty-free', label: '全球免税' },
    { key: 'local-specialty', label: '地方特产' },
    { key: 'frequent-benefits', label: '常客权益' },
    { key: 'travel-tips', label: '出行妙招' }
]);

// 滚动监听函数
const zqj_handleScroll = () => {
    // 获取Header高度，通常为54px
    const headerHeight = 54
    zqj_isScrolled.value = window.scrollY > headerHeight
}

// Tab切换事件处理
const zqj_handleTabChange = (index, tab) => {
    console.log('Tab切换:', index, tab);
};

// 组件挂载时添加滚动监听
onMounted(() => {
    window.addEventListener('scroll', zqj_handleScroll)
})

// 组件卸载时移除滚动监听
onUnmounted(() => {
    window.removeEventListener('scroll', zqj_handleScroll)
})
</script>

<style scoped>
/* 背景颜色EFF1F4*/
.zqj-index {
    background: #EFF1F4;
}

.zqj-adswipe {
    /* 调整轮播图高度，延伸到Header底部 */
    height: calc(15vh + 54px);
    /* 不设置margin-top，保持正常流布局 */
    /* 确保层级在Header下方 */
    position: relative;
    z-index: 1;
}

.zqj-swipe-item-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.zqj-adswipe img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* 轮播图顶部30%阴影遮罩 */
.zqj-swipe-shadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0) 100%);
    z-index: 2;
    pointer-events: none;
}

.zqj_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    /* 初始背景透明，显示轮播图 */
    background: transparent;
    /* 确保Header在轮播图上方 */
    z-index: 100;
    transition: background-color 0.3s ease;
    height: 54px;
    /* 使用绝对定位，让Header浮在轮播图上方 */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}

/* 滚动后的Header样式 */
.zqj_header.zqj-header-scrolled {
    background: white;
}

.zqj_left,
.zqj_right {
    display: flex;
    align-items: center;
}

/* 左侧AI图标 */
.zqj_left .zqj_icon {
    font-size: 24px;
    color: #1989fa;
}

/* 中间搜索栏 */
.zqj_center {
    flex: 1;
    margin: 0 15px;
}

:deep(.van-search) {
    background: transparent;
}

:deep(.van-search__content) {
    background: #f7f8fa;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

:deep(.van-field__control) {
    color: #333;
    background: #f7f8fa;
}

:deep(.van-field__placeholder) {
    color: #999;
}

/* 右侧图标 */
.zqj_right {
    gap: 15px;
}

.zqj_right .zqj_icon {
    font-size: 20px;
    color: #666;
}

/* Tab容器样式 */
.zqj-tab-wrapper {
    position: relative;
    z-index: 1;
}

.zqj-tab-content-wrapper {
    background: #EFF1F4;
}

/* 404页面样式需要底部间距 */
.zqj-404-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    background: #f7f8fa;
    margin: 12px;
    border-radius: 12px;
    /* 为Footer预留空间，Footer高度50px + 10px间距 */
    margin-bottom: 60px;
}

.zqj-404-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.6;
}

.zqj-404-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
}

.zqj-404-desc {
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 1.5;
}
</style>