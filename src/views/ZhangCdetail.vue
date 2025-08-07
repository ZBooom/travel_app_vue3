<!--
作者：张祈健
时间：2025年1月27日
功能名称：内容详情页，展示完整的内容信息和评论
-->
<template>
    <div class="zqj-detail" v-if="zqj_contentData.id">

        <!-- 顶部发布者信息区 -->
        <div class="zqj-publisher-info">
            <div class="zqj-publisher-left">
                <van-icon name="arrow-left" class="zqj-back-icon" @click="zqj_handleBack" />
                <img :src="zqj_avatarUrl" :alt="zqj_contentData.userName" class="zqj-publisher-avatar" />
                <span class="zqj-publisher-name">{{ zqj_contentData.userName }}</span>
            </div>
            <div class="zqj-publisher-actions">
                <van-button type="primary" size="small" class="zqj-follow-btn">+ 关注</van-button>
                <van-icon name="share-o" class="zqj-share-icon" />
            </div>
        </div>

        <!-- 图片展示区 -->
        <div class="zqj-image-section">
            <img :src="zqj_imageUrl" :alt="zqj_contentData.title" />
        </div>

        <!-- 内容文本区 -->
        <div class="zqj-content-section">
            <h2 class="zqj-content-title">{{ zqj_contentData.title }}</h2>
            <p class="zqj-content-text">{{ zqj_contentData.content }}</p>

            <!-- 发布信息区 -->
            <div class="zqj-publish-info">
                <span class="zqj-publish-date">{{ zqj_contentData.publishDate }}</span>
            </div>
        </div>

        <!-- 评论互动区 -->
        <div class="zqj-comment-section">
            <div class="zqj-comment-header">
                <h3>评论 {{ zqj_contentData.comments?.length || 0 }}</h3>
            </div>

            <!-- 评论列表 -->
            <div class="zqj-comment-list">
                <div v-for="comment in zqj_contentData.comments" :key="comment.id" class="zqj-comment-item">
                    <!-- 左侧头像列 -->
                    <div class="zqj-comment-avatar">
                        <img :src="zqj_getCommentAvatarUrl(comment.userAvatar)" :alt="comment.userName"
                            class="zqj-avatar-img" />
                    </div>

                    <!-- 中间评论内容列 -->
                    <div class="zqj-comment-content">
                        <div class="zqj-comment-user">{{ comment.userName }}</div>
                        <div class="zqj-comment-text">{{ comment.content }}</div>
                        <div class="zqj-comment-time">{{ comment.publishTime }}</div>
                    </div>

                    <!-- 右侧点赞列 -->
                    <div class="zqj-comment-like">
                        <van-icon name="good-job-o" class="zqj-like-icon" />
                        <span class="zqj-like-count">{{ comment.likeCount }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部占位空间，防止内容被固定栏遮挡 -->
        <div class="zqj-bottom-spacer"></div>

        <!-- 底部统计栏 -->
        <div class="zqj-action-bar">
            <!-- 左侧评论输入框 -->
            <div class="zqj-comment-input">
                <van-field v-model="zqj_commentText" placeholder="写下你的评论..." class="zqj-input-field" />
            </div>

            <!-- 右侧操作图标 -->
            <div class="zqj-action-icons">
                <div class="zqj-action-item">
                    <van-icon name="good-job" size="25px" />
                    <span>{{ zqj_formatCount(zqj_contentData.likeCount) }}</span>
                </div>
                <div class="zqj-action-item">
                    <van-icon name="star-o" size="25px" />
                    <span>收藏</span>
                </div>
                <div class="zqj-action-item">
                    <van-icon name="chat-o" size="25px" />
                    <span>{{ zqj_contentData.comments?.length || 0 }}</span>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="zqj-loading-container">
        <van-loading type="spinner" />
        <span>加载中...</span>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

// 响应式数据
const zqj_contentData = ref({})
const zqj_commentText = ref('')

// 计算属性 - 添加错误处理
const zqj_imageUrl = computed(() => {
    if (!zqj_contentData.value.image) return ''
    try {
        return new URL(`../assets/images/${zqj_contentData.value.image}`, import.meta.url).href
    } catch (error) {
        console.warn('详情页图片加载失败:', zqj_contentData.value.image)
        return new URL(`../assets/images/1.jpg`, import.meta.url).href
    }
})

const zqj_avatarUrl = computed(() => {
    if (!zqj_contentData.value.userAvatar) return ''
    try {
        return new URL(`../assets/images/${zqj_contentData.value.userAvatar}`, import.meta.url).href
    } catch (error) {
        console.warn('详情页头像加载失败:', zqj_contentData.value.userAvatar)
        return new URL(`../assets/images/1.jpg`, import.meta.url).href
    }
})

// 格式化数字
const zqj_formatCount = (count) => {
    if (count >= 10000) {
        return (count / 10000).toFixed(1) + 'w'
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'k'
    }
    return count.toString()
}

// 获取内容详情
const zqj_getContentDetail = async () => {
    try {
        const contentId = parseInt(route.params.id)
        console.log('获取内容详情，ID:', contentId)

        // 获取完整的 JSON 数据
        const response = await axios.get(`https://zbooom.github.io/travel_app_vue3/zhangdb.json`)
        console.log('所有内容数据:', response.data.zcontent)

        // 在客户端根据 ID 过滤数据
        if (response.data.zcontent && response.data.zcontent.length > 0) {
            const foundContent = response.data.zcontent.find(item => item.id === contentId)
            if (foundContent) {
                zqj_contentData.value = foundContent
                console.log('找到对应内容:', foundContent)
            } else {
                console.error('未找到对应ID的内容:', contentId)
                // 可以设置一个默认的错误状态
                zqj_contentData.value = { 
                    title: '内容不存在', 
                    content: '抱歉，未找到对应的内容',
                    userName: '系统',
                    userAvatar: '1.jpg',
                    likeCount: 0,
                    publishDate: new Date().toISOString().split('T')[0],
                    comments: []
                }
            }
        } else {
            console.error('数据格式错误或无内容')
        }
    } catch (error) {
        console.error('获取内容详情失败:', error)
        // 可以在这里设置错误状态或显示错误信息
    }
}

// 返回上一页
const zqj_handleBack = () => {
    router.back()
}

// 获取评论头像URL
const zqj_getCommentAvatarUrl = (avatarPath) => {
    if (!avatarPath) return new URL(`../assets/images/1.jpg`, import.meta.url).href
    try {
        return new URL(`../assets/images/${avatarPath}`, import.meta.url).href
    } catch (error) {
        console.warn('评论头像加载失败:', avatarPath)
        return new URL(`../assets/images/1.jpg`, import.meta.url).href
    }
}

onMounted(() => {
    zqj_getContentDetail()
})
</script>

<style scoped>
.zqj-back-icon {
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
    margin-right: 12px;
}

.zqj-back-icon:hover {
    color: #1989fa;
}

.zqj-detail {
    background: #fff;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
}

.zqj-publisher-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
}

.zqj-publisher-left {
    display: flex;
    align-items: center;
}

.zqj-publisher-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
    object-fit: cover;
}

.zqj-publisher-name {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.zqj-publisher-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.zqj-follow-btn {
    font-size: 15px;
    padding: 6px 12px;
    background: #fff !important;
    color: #333 !important;
    border: 1px solid #e5e5e5 !important;
    border-radius: 15px !important;
}

.zqj-follow-btn :deep(.van-button__content) {
    color: #333;
}

.zqj-share-icon {
    font-size: 20px;
    color: #666;
}

.zqj-image-section {
    width: 100%;
}

.zqj-image-section img {
    width: 100%;
    height: auto;
    display: block;
}

.zqj-content-section {
    padding: 16px;
    /* 移动端适配 */
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.zqj-content-title {
    font-size: 20px;
    /* 从18px增加到20px */
    font-weight: 550;
    color: #333;
    margin-bottom: 12px;
    line-height: 1.4;
    text-align: left;
    padding: 0;
    /* 移动端适配 */
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.zqj-content-text {
    font-size: 14px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 16px;
    text-align: left;
    /* 添加左对齐 */
    /* 移动端适配 */
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.zqj-publish-info {
    text-align: left;
}

.zqj-publish-date {
    font-size: 13px;
    color: #999;
}

.zqj-comment-section {
    padding: 16px;
    border-top: 8px solid #f7f8fa;
    /* 移动端适配 */
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.zqj-comment-header h3 {
    font-size: 13px;
    font-weight: 500;
    color: #666;
    margin-bottom: 16px;
}

.zqj-comment-item {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f0f0f0;
    align-items: flex-start;
}

/* 左侧头像列 */
.zqj-comment-avatar {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
}

.zqj-avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

/* 中间评论内容列 */
.zqj-comment-content {
    flex: 1;
    min-width: 0;
    text-align: left;
}

.zqj-comment-user {
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-bottom: 4px;
    line-height: 1.2;
}

.zqj-comment-text {
    font-size: 14px;
    color: #333;
    margin-bottom: 4px;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.zqj-comment-time {
    font-size: 13px;
    color: #999;
    line-height: 1.2;
}

/* 右侧点赞列 */
.zqj-comment-like {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    width: 40px;
    padding-top: 4px;
}

.zqj-like-icon {
    font-size: 18px;
    color: #999;
}

.zqj-like-count {
    font-size: 12px;
    color: #999;
    line-height: 1.2;
}

.zqj-comment-input {
    display: flex;
    align-items: center;
    gap: 12px;
}

.zqj-input-field {
    border-radius: 20px;
    width: 100%;
}

.zqj-input-field :deep(.van-field__control) {
    border-radius: 20px;
    background: #f7f8fa;
    border: 1px solid #e5e5e5;
    padding: 8px 16px;
    height: 36px;
    line-height: 20px;
}

/* 底部占位空间，防止内容被固定栏遮挡 */
.zqj-bottom-spacer {
    height: 80px;
    width: 100%;
}

.zqj-action-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
    z-index: 1000;
    min-height: 50px;
}

/* 左侧评论输入框 */
.zqj-comment-input {
    flex: 1;
    margin-right: 8px;
    display: flex;
    align-items: center;
}

/* 右侧操作图标组 */
.zqj-action-icons {
    display: flex;
    gap: 16px;
    flex-shrink: 0;
    align-items: center;
    /* 确保图标组垂直居中 */
}

.zqj-action-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* 确保图标和文字垂直居中 */
    gap: 4px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    min-width: 45px;
    padding: 4px;
    height: 36px;
    /* 与输入框同高 */
    justify-content: center;
    /* 水平居中 */
}

/* 移动端特殊适配 */
@media (max-width: 768px) {
    .zqj-back-icon {
        font-size: 22px;
        margin-right: 10px;
    }

    .zqj-publisher-info {
        padding: 12px;
    }

    .zqj-content-section {
        padding: 12px;
    }

    .zqj-comment-section {
        padding: 12px;
    }

    .zqj-content-title {
        font-size: 18px;
        /* 移动端从16px增加到18px */
    }

    .zqj-action-bar {
        padding: 6px 10px;
        gap: 8px;
    }

    .zqj-action-icons {
        gap: 12px;
    }

    .zqj-action-item {
        font-size: 14px;
        min-width: 40px;
        gap: 3px;
        height: 32px;
        /* 与移动端输入框同高 */
    }

    .zqj-action-item van-icon {
        font-size: 16px;
    }

    .zqj-input-field :deep(.van-field__control) {
        padding: 6px 12px;
        font-size: 14px;
        height: 32px;
        /* 移动端调整高度 */
        line-height: 18px;
    }

    .zqj-comment-item {
        gap: 10px;
    }

    .zqj-comment-avatar {
        width: 36px;
        height: 36px;
    }

    .zqj-comment-like {
        width: 36px;
    }

    .zqj-like-icon {
        font-size: 16px;
    }

    .zqj-like-count {
        font-size: 11px;
    }
}

/* 超小屏幕适配 */
@media (max-width: 375px) {
    .zqj-back-icon {
        font-size: 20px;
        margin-right: 8px;
    }

    .zqj-publisher-info {
        padding: 8px;
    }

    .zqj-content-section {
        padding: 8px;
    }

    .zqj-comment-section {
        padding: 8px;
    }

    .zqj-action-bar {
        padding: 4px 8px;
        gap: 6px;
    }

    .zqj-action-icons {
        gap: 10px;
    }

    .zqj-action-item {
        font-size: 13px;
        min-width: 35px;
        gap: 2px;
        height: 30px;
        /* 与超小屏输入框同高 */
    }

    .zqj-action-item van-icon {
        font-size: 14px;
    }

    .zqj-input-field :deep(.van-field__control) {
        padding: 5px 10px;
        font-size: 13px;
        height: 30px;
        /* 超小屏调整高度 */
        line-height: 16px;
    }

    .zqj-comment-item {
        gap: 8px;
    }

    .zqj-comment-avatar {
        width: 32px;
        height: 32px;
    }

    .zqj-comment-like {
        width: 32px;
    }

    .zqj-like-icon {
        font-size: 14px;
    }

    .zqj-like-count {
        font-size: 10px;
    }
}
</style>