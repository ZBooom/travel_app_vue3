<!--
作者：张祈健
时间：2025年1月27日
功能名称：内容卡片组件，支持上图下文布局和用户信息展示
-->
<template>
    <div class="zqj-card" @click="zqj_handleCardClick">
        <!-- 图片区域 -->
        <div class="zqj-card-image">
            <img :src="zqj_imageUrl" :alt="zqj_cardData.title" />
        </div>

        <!-- 标题区域 -->
        <div class="zqj-card-title">
            {{ zqj_cardData.title }}
        </div>

        <!-- 底部信息区域 -->
        <div class="zqj-card-footer">
            <!-- 左侧用户信息 -->
            <div class="zqj-user-info">
                <img :src="zqj_avatarUrl" :alt="zqj_cardData.userName" class="zqj-user-avatar" />
                <span class="zqj-user-name">{{ zqj_cardData.userName }}</span>
            </div>

            <!-- 右侧点赞信息 -->
            <div class="zqj-like-info">
                <van-icon name="good-job" class="zqj-like-icon" />
                <span class="zqj-like-count">{{ zqj_formatLikeCount(zqj_cardData.likeCount) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Props定义
const props = defineProps({
    cardData: {
        type: Object,
        required: true,
        default: () => ({})
    }
})

// 响应式数据
const zqj_cardData = computed(() => props.cardData)

// 图片URL处理，添加错误处理
const zqj_imageUrl = computed(() => {
    try {
        return new URL(`../assets/images/${zqj_cardData.value.image}`, import.meta.url).href
    } catch (error) {
        console.warn('图片加载失败:', zqj_cardData.value.image)
        return new URL(`../assets/images/1.jpg`, import.meta.url).href // 默认图片
    }
})

const zqj_avatarUrl = computed(() => {
    try {
        return new URL(`../assets/images/${zqj_cardData.value.userAvatar}`, import.meta.url).href
    } catch (error) {
        console.warn('头像加载失败:', zqj_cardData.value.userAvatar)
        return new URL(`../assets/images/1.jpg`, import.meta.url).href // 默认头像
    }
})

// 格式化点赞数
const zqj_formatLikeCount = (count) => {
    if (count >= 10000) {
        return (count / 10000).toFixed(1) + 'w'
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
}

// 卡片点击事件
const zqj_handleCardClick = () => {
    console.log('卡片点击，跳转到详情页，ID:', zqj_cardData.value.id)
    router.push(`/content-detail/${zqj_cardData.value.id}`)
}
</script>

<style scoped>
.zqj-card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease;
    margin-bottom: 12px;
}

.zqj-card:hover {
    transform: translateY(-2px);
}

.zqj-card-image {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.zqj-card-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.zqj-card:hover .zqj-card-image img {
    transform: scale(1.05);
}

.zqj-card-title {
    padding: 12px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.zqj-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px 12px;
}

.zqj-user-info {
    display: flex;
    align-items: center;
    flex: 1;
}

.zqj-user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 6px;
    object-fit: cover;
}

.zqj-user-name {
    font-size: 12px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80px;
}

.zqj-like-info {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-like-icon {
    font-size: 16px;
    color: #666;
}

.zqj-like-count {
    font-size: 12px;
    color: #666;
}
</style>