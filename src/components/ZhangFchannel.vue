<template>
    <div class="zqj-fchannel-container">
        <!-- 头部标题区域 -->
        <div class="zqj-fchannel-header">
            <h3 class="zqj-fchannel-title">精选频道</h3>
        </div>

        <!-- 频道内容区域 -->
        <div class="zqj-fchannel-content">
            <div class="zqj-channel-grid">
                <!-- 行程点评 - 轮播样式，占1/2宽度 -->
                <div class="zqj-channel-item zqj-itinerary-review">
                    <van-swipe class="zqj-review-swipe" :autoplay="3000" @change="zqj_handleSlideChange">
                        <van-swipe-item v-for="(item, index) in zqj_reviewItems" :key="index">
                            <div class="zqj-review-content">
                                <!-- 左上角标题 -->
                                <div class="zqj-review-header">
                                    <h4 class="zqj-review-category">行程点评</h4>
                                </div>

                                <!-- 中间body -->
                                <div class="zqj-review-body">
                                    <svg class="zqj-airline-icon" aria-hidden="true">
                                        <use :xlink:href="`#my-icon-${item.icon}`"></use>
                                    </svg>

                                    <!-- 右侧文字信息 -->
                                    <div class="zqj-airline-info">
                                        <div class="zqj-flight-number">{{ item.flightNumber }}</div>
                                        <div class="zqj-rating">{{ item.rating }}分</div>
                                    </div>
                                </div>

                                <!-- 底部日期路线和箭头 -->
                                <div class="zqj-review-footer">
                                    <span class="zqj-flight-route">{{ item.date }} {{ item.route }}</span>
                                    <van-icon name="arrow" class="zqj-review-arrow" />
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
                </div>

                <!-- 本地聊天室 - 占1/4宽度 -->
                <div class="zqj-channel-item zqj-local-chat">
                    <div class="zqj-chat-content">
                        <!-- 顶部标题 -->
                        <div class="zqj-chat-header">
                            <h4 class="zqj-chat-category">本地聊天室</h4>
                        </div>

                        <!-- 中间body -->
                        <div class="zqj-chat-body">
                            <!-- 聊天室图片 -->
                            <img :src="zqj_getImg('localsay.png')" class="zqj-chat-img" />
                        </div>

                        <!-- 底部信息 -->
                        <div class="zqj-chat-footer">
                            <van-icon class-prefix="my-icon" name="wangluoxinhaosange" class="zqj-chat-status-icon" />
                            <span class="zqj-chat-status-text">38人在线</span>
                        </div>
                    </div>
                </div>

                <!-- 航旅黑科技 - 占1/4宽度 -->
                <div class="zqj-channel-item zqj-travel-tech">
                    <div class="zqj-tech-content">
                        <!-- 顶部标题 -->
                        <div class="zqj-tech-header">
                            <h4 class="zqj-tech-category">航旅黑科技</h4>
                        </div>

                        <!-- 中间body -->
                        <div class="zqj-tech-body">
                            <!-- 科技图片 -->
                            <img :src="zqj_getImg('tech.png')" class="zqj-tech-img" />
                        </div>

                        <!-- 底部信息 -->
                        <div class="zqj-tech-footer">
                            <span class="zqj-tech-feature-text">玩转新功能</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import '@/assets/fonts/iconfont/iconfont.js'

// 当前轮播索引
const zqj_currentSlideIndex = ref(0)

// 轮播切换事件
const zqj_handleSlideChange = (index) => {
    zqj_currentSlideIndex.value = index
}

// 图片路径获取工具函数
const zqj_getImg = (img) => {
    return new URL(`../assets/images/${img}`, import.meta.url).href
}

// 行程点评轮播数据
const zqj_reviewItems = [
    {
        flightNumber: '南方航空 CZ6122',
        icon: 'nanfanghangkong',
        rating: '4.7',
        date: '2025-05-05',
        route: '北京-大连'
    },
    {
        flightNumber: '南方航空 CZ6128',
        icon: 'nanfanghangkong',
        rating: '4.8',
        date: '2025-05-06',
        route: '上海-深圳'
    },
    {
        flightNumber: '南方航空 CZ356',
        icon: 'nanfanghangkong',
        rating: '4.6',
        date: '2025-05-07',
        route: '广州-北京'
    }
]
</script>

<style scoped>
.zqj-fchannel-container {
    background: #fff;
    padding: 0 12px;
    border-top-left-radius: 20px;
}

.zqj-fchannel-header {
    padding-top: 16px;
}

.zqj-fchannel-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0;
    line-height: 1.2;
}

.zqj-fchannel-content {
    padding: 16px 0;
}

.zqj-channel-grid {
    display: flex;
    gap: 12px;
    height: 160px;
    /* 比ExpCard的200px矮一点 */
}

.zqj-channel-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

/* 行程点评 - 轮播样式，占1/2宽度 */
.zqj-itinerary-review {
    flex: 1;
    background: #E8F4FF;
    border: 1px solid #D1E5F9;
}

.zqj-review-swipe {
    height: 100%;
    width: 100%;
}

.zqj-review-content {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}

/* 左上角标题 */
.zqj-review-header {
    margin-bottom: 8px;
}

.zqj-review-category {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #333;
    line-height: 1.2;
}

/* 自定义指示器样式 - 定位到右上角 */
.zqj-custom-indicators {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    gap: 4px;
    align-items: center;
    z-index: 10;
}

.zqj-indicator-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(79, 170, 62, 0.3);
    transition: all 0.3s ease;
}

.zqj-indicator-dot.zqj-active {
    background: #4FAA3E;
    width: 15px;
    border-radius: 3px;
    transform: scale(1);
}

/* 中间body */
.zqj-review-body {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    margin-bottom: 6px;
}

.zqj-airline-icon {
    width: 40px;
    /* 从32px增加到40px */
    height: 40px;
    /* 从32px增加到40px */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    /* 从16px增加到20px */
    flex-shrink: 0;
}

.zqj-airline-info {
    flex: 1;
    min-width: 0;
}

.zqj-flight-number {
    font-size: 13px;
    font-weight: bold;
    color: #333;
    margin: 0 0 4px 0;
    line-height: 1.2;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.zqj-rating {
    font-size: 11px;
    color: #41B24E;
    margin: 0;
    line-height: 1.2;
}

/* 底部日期路线和箭头 */
.zqj-review-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
}

.zqj-flight-route {
    font-size: 11px;
    color: #666;
    line-height: 1.2;
    flex: 1;
}

.zqj-review-arrow {
    color: #666;
    font-size: 12px;
    flex-shrink: 0;
}

/* 本地聊天室 - 占1/4宽度 */
.zqj-local-chat {
    flex: 0 0 calc(25% - 6px);
    background: #F0FBF1;
    border: 1px solid #D6F0D8;
}

.zqj-chat-content {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}

/* 顶部标题 */
.zqj-chat-header {
    text-align: center;
    margin-bottom: 8px;
}

.zqj-chat-category {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #333;
    line-height: 1.2;
}

/* 中间body */
.zqj-chat-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-bottom: 6px;
}

.zqj-chat-img {
    width: 40px;
    /* 从32px增加到40px */
    height: 40px;
    /* 从32px增加到40px */
    object-fit: cover;
    border-radius: 8px;
}

/* 底部信息 */
.zqj-chat-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
}

.zqj-chat-status-icon {
    color: #41B24E;
    font-size: 12px;
}

.zqj-chat-status-text {
    font-size: 11px;
    color: #666;
    line-height: 1.2;
}

/* 航旅黑科技 - 占1/4宽度 */
.zqj-travel-tech {
    flex: 0 0 calc(25% - 6px);
    background: #E8F4FF;
    border: 1px solid #CFE5F9;
}

.zqj-tech-content {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}

/* 顶部标题 */
.zqj-tech-header {
    text-align: center;
    margin-bottom: 8px;
}

.zqj-tech-category {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #333;
    line-height: 1.2;
}

/* 中间body */
.zqj-tech-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-bottom: 6px;
}

.zqj-tech-img {
    width: 40px;
    /* 从32px增加到40px */
    height: 40px;
    /* 从32px增加到40px */
    border-radius: 8px;
    object-fit: cover;
}

/* 底部信息 */
.zqj-tech-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
}

.zqj-tech-feature-text {
    font-size: 11px;
    color: #666;
    line-height: 1.2;
    text-align: center;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-channel-grid {
        height: 140px;
        gap: 8px;
    }

    .zqj-local-chat,
    .zqj-travel-tech {
        flex: 0 0 calc(25% - 4px);
    }

    .zqj-chat-content,
    .zqj-tech-content {
        padding: 12px 8px;
    }

    .zqj-review-content {
        padding: 12px;
    }
}

@media (max-width: 480px) {
    .zqj-channel-grid {
        height: 120px;
        gap: 6px;
    }

    .zqj-chat-icon,
    .zqj-tech-icon {
        font-size: 20px;
        margin-bottom: 6px;
    }

    .zqj-chat-title,
    .zqj-tech-title {
        font-size: 11px;
    }

    .zqj-review-title {
        font-size: 12px;
    }
}
</style>