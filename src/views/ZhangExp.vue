<template>
    <div class="zqj-exp-page">
        <!-- 顶部Header -->
        <div class="zqj-header">
            <!-- 左侧标题 -->
            <div class="zqj-header-title">
                <h2>U社区</h2>
            </div>

            <!-- 中间搜索栏 -->
            <div class="zqj-header-search">
                <van-search v-model="zqj_searchValue" placeholder="有态度更有温度的飞行圈" shape="round" background="transparent"
                    readonly @click="zqj_handleSearchClick" />
            </div>

            <!-- 右侧用户头像 -->
            <div class="zqj-header-avatar">
                <img :src="zqj_userAvatarUrl" alt="用户头像" class="zqj-avatar-img" />
            </div>
        </div>

        <!-- 卡片容器 -->
        <div class="zqj-cards-container">
            <ZhangWeekcard />
            <ZhangAirportcard />
        </div>

        <!-- 精选频道 -->
        <ZhangFchannel />

        <!-- Tab组件放在独立容器中 -->
        <div class="zqj-tab-wrapper">
            <ZhangTab :tabs="zqj_tabOptions" :defaultActive="0" :stickyTop="'56px'" @change="zqj_handleTabChange">
                <template #default="{ activeTab, activeIndex }">
                    <div v-if="activeIndex === 0" class="zqj-tab-content-wrapper">
                        <ZhangWaterfall></ZhangWaterfall>
                    </div>
                    <div v-else class="zqj-404-content">
                        <div class="zqj-404-icon">📄</div>
                        <div class="zqj-404-title">404 - 暂无内容</div>
                        <div class="zqj-404-desc">{{ activeTab.label }}功能正在开发中，敬请期待</div>
                    </div>
                </template>
            </ZhangTab>
        </div>
    </div>
    <ZhangFooter></ZhangFooter>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ZhangFooter from '@/components/ZhangFooter.vue'
import ZhangWeekcard from '@/components/ZhangWeekcard.vue'
import ZhangAirportcard from '@/components/ZhangAirportcard.vue'
import ZhangFchannel from '@/components/ZhangFchannel.vue'
import ZhangTab from '@/components/ZhangTab.vue'
import ZhangWaterfall from '@/components/ZhangWaterfall.vue'

const router = useRouter()

// 响应式数据
const zqj_searchValue = ref('')

// 用户头像URL
const zqj_userAvatarUrl = computed(() => {
    try {
        return new URL('../assets/images/1.jpg', import.meta.url).href
    } catch (error) {
        console.warn('用户头像加载失败')
        return new URL('../assets/images/1.jpg', import.meta.url).href
    }
})

// Tab选项配置
const zqj_tabOptions = ref([
    { key: 'experience', label: '经验' },
    { key: 'discussion', label: '讨论' },
    { key: 'video', label: '视频' }
])

// Tab切换事件处理
const zqj_handleTabChange = (index, tab) => {
    console.log('Tab切换:', index, tab)
}

// 搜索框点击处理
const zqj_handleSearchClick = () => {
    router.push('/exp-search')
}
</script>

<style scoped>
.zqj-exp-page {
    background: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 60px;
}

.zqj-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: #f5f5f5;
}

.zqj-header-title {
    flex-shrink: 0;
    min-width: 80px;
}

.zqj-header-title h2 {
    font-size: 26px;
    font-weight: bold;
    color: #333;
    margin: 0;
    padding-left: 5px;
}

.zqj-header-search {
    flex: 1;
    margin: 0 16px;
    max-width: 300px;
}

.zqj-header-search :deep(.van-search) {
    padding: 0;
    background: transparent;
}

.zqj-header-search :deep(.van-search__content) {
    background: #fff;
    border-radius: 20px;
    border: 1px solid #e5e5e5;
}

.zqj-header-search :deep(.van-field__control) {
    font-size: 14px;
    color: #333;
}

.zqj-header-search :deep(.van-field__placeholder) {
    color: #999;
}

.zqj-header-avatar {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-top: -4px;
}

.zqj-avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #e5e5e5;
}

.zqj-cards-container {
    display: flex;
    gap: 12px;
    padding: 16px 12px;
    background: #f5f5f5;
    border-bottom-right-radius: 20px;
}

/* 404内容样式 */
.zqj-404-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px;
    text-align: center;
    background: #fff;
    margin: 12px;
    border-radius: 12px;
}

.zqj-404-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.6;
}

.zqj-404-title {
    font-size: 18px;
    font-weight: bold;
    color: #666;
    margin: 0 0 8px 0;
    line-height: 1.2;
}

.zqj-404-desc {
    font-size: 14px;
    color: #999;
    line-height: 1.4;
    margin: 0;
}

/* Tab容器样式 */
.zqj-tab-wrapper {
    /* 确保Tab容器能正常滚动 */
    position: relative;
    z-index: 1;
}

.zqj-tab-content-wrapper {
    /* 内容区域无需特殊样式，保持自然滚动 */
    background: #f5f5f5;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-header {
        padding: 10px 12px;
    }

    .zqj-header-title {
        min-width: 60px;
    }

    .zqj-header-title h2 {
        font-size: 24px;
    }

    .zqj-header-search {
        margin: 0 12px;
    }

    .zqj-header-avatar {
        width: 36px;
        height: 36px;
    }

    .zqj-cards-container {
        gap: 12px;
        padding: 12px;
    }
}

@media (max-width: 480px) {
    .zqj-header-title h2 {
        font-size: 22px;
    }

    .zqj-header-search {
        margin: 0 8px;
    }

    .zqj-header-avatar {
        width: 32px;
        height: 32px;
    }
}
</style>