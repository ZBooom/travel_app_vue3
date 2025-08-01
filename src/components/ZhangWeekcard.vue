<!--
作者：张祈健
时间：2025年1月27日
功能名称：每周快看轮播卡片组件 - 清空重制
-->
<template>
    <ZhangExpCard type="weekly" class="zqj-weekly-card">
        <!-- 顶部固定标题与日期 -->
        <div class="zqj-weekly-header">
            <div class="zqj-weekly-title">每周快看</div>
            <div class="zqj-weekly-date-flag">May. 31</div>
        </div>

        <!-- 轮播区域 -->
        <van-swipe class="zqj-weekly-swipe" :autoplay="4000" @change="zqj_handleSlideChange">
            <van-swipe-item v-for="(item, index) in zqj_swipeItems" :key="index">
                <div class="zqj-weekly-swipe-content" :style="{ backgroundImage: `url(${item.bg})` }">

                    <!-- 添加阴影遮罩层 -->
                    <div class="zqj-weekly-shadow-overlay"></div>

                    <!-- 中部标识与标题 -->
                    <div class="zqj-weekly-badge">近3日发布</div>
                    <div class="zqj-weekly-topic">{{ item.title }}</div>

                    <!-- 底部信息 -->
                    <div class="zqj-weekly-footer">
                        <div class="zqj-weekly-author">
                            <img :src="item.avatar" class="zqj-weekly-avatar" />
                            <span class="zqj-weekly-name">{{ item.author }}</span>
                            <van-icon name="arrow" class="zqj-weekly-arrow" />
                        </div>
                    </div>
                </div>
            </van-swipe-item>

            <!-- 使用indicator插槽自定义指示器 -->
            <template #indicator="{ active, total }">
                <div class="zqj-custom-indicators">
                    <span v-for="index in total" :key="index"
                        :class="['zqj-indicator-dot', { 'zqj-active': active === index - 1 }]">
                    </span>
                </div>
            </template>
        </van-swipe>
    </ZhangExpCard>
</template>

<script setup>
import { ref } from 'vue'
import ZhangExpCard from './ZhangExpCard.vue'

// 当前轮播索引
const zqj_currentSlideIndex = ref(0)

// 轮播切换事件
const zqj_handleSlideChange = (index) => {
    zqj_currentSlideIndex.value = index
}

// 工具函数：从 ../assets/images/ 里读取 img
const zqj_getImg = (img) => {
    return new URL(`../assets/images/${img}`, import.meta.url).href
}

// 这里所有项都统一使用 1.jpg 作为背景和头像
const zqj_swipeItems = [
    {
        title: '在唐山寻找烟火气',
        author: '总有刁民想害朕',
        avatar: zqj_getImg('1.jpg'),
        bg: zqj_getImg('1.jpg')
    },
    {
        title: '五道口地下艺术展',
        author: '文化穿梭机',
        avatar: zqj_getImg('1.jpg'),
        bg: zqj_getImg('2.jpg')
    },
    {
        title: '周末去郊外摘草莓！',
        author: '果子狸',
        avatar: zqj_getImg('1.jpg'),
        bg: zqj_getImg('3.jpg')
    }
]
</script>

<style scoped>
.zqj-weekly-card {
    position: relative;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    color: #fff;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

}

/* 顶部固定标题区 */
.zqj-weekly-header {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.zqj-weekly-title {
    font-size: 16px;
    font-weight: bold;
}

.zqj-weekly-date-flag {
    background: rgba(0, 0, 0, 0.5);
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}

/* 轮播容器 - 确保撑满父元素 */
.zqj-weekly-swipe {
    height: 100%;
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.zqj-weekly-swipe-content {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 40px 12px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    box-sizing: border-box;
}

/* 添加阴影遮罩层 - 占图片下半部分 */
.zqj-weekly-shadow-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.2) 30%,
            rgba(0, 0, 0, 0.5) 70%,
            rgba(0, 0, 0, 0.8) 100%);
    border-radius: 0 0 16px 16px;
    /* 保持圆角 */
    z-index: 1;
}

/* 中部"近3日发布"标识和主题 */
.zqj-weekly-badge {
    background-color: #4cd963b2;
    color: #fff;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 5px;
    display: inline-block;
    margin-top: 25px;
    width: fit-content;
}

.zqj-weekly-topic {
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 5px;
}

/* 底部信息 - 改为flex布局，左右分布 */
.zqj-weekly-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.zqj-weekly-author {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-weekly-avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
}

.zqj-weekly-name {
    font-size: 12px;
}

.zqj-weekly-arrow {
    font-size: 12px;
    color: #fff;
}

/* 自定义指示器样式 - 定位到右下角 */
.zqj-custom-indicators {
    position: absolute;
    bottom: 10px;
    right: 12px;
    display: flex;
    gap: 4px;
    align-items: center;
    z-index: 3;
}

.zqj-indicator-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
}

.zqj-indicator-dot.zqj-active {
    background: #fff;
    /* 修改为细长条样式 */
    width: 15px;
    border-radius: 3px;
    transform: scale(1);
}

/* 确保内容在阴影层之上 */
.zqj-weekly-badge,
.zqj-weekly-topic,
.zqj-weekly-footer {
    position: relative;
    z-index: 2;
}

/* 可选：在更小屏幕进一步微调 */
@media (max-width: 480px) {
    .zqj-weekly-topic {
        font-size: 12px;
    }

    .zqj-weekly-avatar {
        width: 18px;
        height: 18px;
    }

    .zqj-weekly-name {
        font-size: 11px;
    }
}
</style>
