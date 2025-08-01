<template>
    <div class="zqj-itinerary-page">
        <!-- 顶部Tab导航栏 -->
        <div class="zqj-itinerary-header">
            <!-- Tab选项卡 -->
            <div class="zqj-tab-section">
                <div v-for="(tab, index) in zqj_tabOptions" :key="tab.key"
                    :class="['zqj-tab-option', { 'zqj-active': zqj_activeTabIndex === index }]"
                    @click="zqj_handleTabClick(index)">
                    <span class="zqj-tab-label">{{ tab.label }}</span>
                </div>
            </div>

            <!-- 右侧省略图标 -->
            <div class="zqj-more-section">
                <van-icon name="ellipsis" class="zqj-more-icon" @click="zqj_handleMoreClick" />
            </div>
        </div>

        <!-- 内容区域 -->
        <div class="zqj-content-area">
            <!-- 待出行内容 -->
            <div v-if="zqj_activeTabIndex === 0" class="zqj-tab-content">
                <div class="zqj-empty-state">
                    <div class="zqj-empty-title">没有未来行程</div>
                    <div class="zqj-empty-desc">有国际/国内行程没显示怎么办?</div>

                    <!-- 新增：预定按钮区域 -->
                    <div class="zqj-booking-buttons">
                        <button class="zqj-booking-btn" @click="zqj_handleBookFlight">预定机票</button>
                        <button class="zqj-booking-btn" @click="zqj_handleBookTrain">预定火车票</button>
                    </div>
                </div>
            </div>

            <!-- 已结束内容 - 使用ZhangItab组件 -->
            <div v-else class="zqj-tab-content">
                <ZhangItab></ZhangItab>
            </div>
        </div>

    </div>
    <ZhangFooter></ZhangFooter>
</template>

<script setup>
import { ref } from 'vue'
import ZhangFooter from '@/components/ZhangFooter.vue'
import ZhangItab from '@/components/ZhangItab.vue'

// Tab选项配置
const zqj_tabOptions = ref([
    { key: 'pending', label: '待出行' },
    { key: 'completed', label: '已结束' }
])

// 当前激活的Tab索引
const zqj_activeTabIndex = ref(1) // 将默认值从 0 修改为 1

// Tab点击处理
const zqj_handleTabClick = (index) => {
    zqj_activeTabIndex.value = index
}

// 更多按钮点击处理
const zqj_handleMoreClick = () => {
    console.log('点击更多菜单')
    // TODO: 实现更多菜单功能
}

// 新增：预定按钮点击处理
const zqj_handleBookFlight = () => {
    console.log('点击预定机票')
    // TODO: 实现预定机票功能
}

const zqj_handleBookTrain = () => {
    console.log('点击预定火车票')
    // TODO: 实现预定火车票功能
}
</script>

<style scoped>
.zqj-itinerary-page {
    background: #fff;
    min-height: 100vh;
    padding-bottom: 60px;
}

.zqj-itinerary-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 20px;
    background: #CEDEEE;
    position: sticky;
    top: 0;
    z-index: 98;
}

.zqj-tab-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
}

.zqj-tab-option {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    cursor: pointer;
    transition: all 0.3s ease;
}

.zqj-tab-label {
    font-size: 18px;
    color: #666;
    font-weight: 500;
    transition: all 0.3s ease;
    line-height: 1.2;
}

/* 选中状态 */
.zqj-tab-option.zqj-active .zqj-tab-label {
    font-size: 21px;
    color: #333;
    font-weight: bold;
}

/* 绿色指示条 */
.zqj-tab-option.zqj-active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: #42b24e;
    border-radius: 2px;
}

.zqj-more-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.zqj-more-icon {
    font-size: 20px;
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
}

.zqj-content-area {
    padding: 0;
}

.zqj-tab-content {
    background: #CEDEEE;
    padding: 0;
}

.zqj-empty-state {
    display: flex;
    height: 900px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* 从center改为flex-start */
    text-align: center;
    padding: 200px 20px 20px 20px;
    /* 增加顶部padding，从20px改为200px */
    background: linear-gradient(to bottom, #dae6f1 5%, #fff 95%);
    border-radius: 12px 12px 0 0;
    /* 上边框 */
    border-top: 1px solid #fff;
}

.zqj-empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.6;
}

.zqj-empty-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0 0 8px 0;
    line-height: 1.2;
}

.zqj-empty-desc {
    font-size: 14px;
    color: #42b24e;
    line-height: 1.4;
    margin: 0 0 20px 0;
    /* 增加底部间距 */
    text-decoration: underline;
    text-underline-offset: 3px;
}

/* 新增：预定按钮样式 */
.zqj-booking-buttons {
    display: flex;
    justify-content: center;
    /* 从space-between改为center */
    align-items: center;
    gap: 20px;
    /* 增加间距 */
    margin-top: 5px;
    width: 100%;
}

.zqj-booking-btn {
    padding: 10px 20px;
    background-color: #fff;
    color: #42b24e;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    /* 添加自适应宽度 */
    min-width: auto;
    flex: 0 0 auto;
    /* 根据内容自适应左右间距 */
    padding-left: calc(1em + 8px);
    padding-right: calc(1em + 8px);
}

.zqj-booking-btn:hover {
    background-color: #42b24e;
    color: #fff;
}

.zqj-booking-btn:active {
    transform: scale(0.98);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-itinerary-header {
        padding: 12px 16px;
    }

    .zqj-tab-section {
        gap: 50px;
    }

    .zqj-tab-label {
        font-size: 17px;
    }

    .zqj-tab-option.zqj-active .zqj-tab-label {
        font-size: 20px;
    }

    .zqj-booking-buttons {
        justify-content: center;
        /* 保持居中 */
        gap: 16px;
    }

    .zqj-booking-btn {
        padding: 8px 16px;
        /* 移动端也使用自适应间距 */
        padding-left: calc(0.8em + 6px);
        padding-right: calc(0.8em + 6px);
    }
}

@media (max-width: 480px) {
    .zqj-tab-section {
        gap: 40px;
    }

    .zqj-tab-label {
        font-size: 16px;
    }

    .zqj-tab-option.zqj-active .zqj-tab-label {
        font-size: 19px;
    }

    .zqj-more-icon {
        font-size: 18px;
    }

    .zqj-booking-buttons {
        justify-content: center;
        /* 保持居中 */
        gap: 12px;
        flex-direction: row;
        /* 保持水平排列 */
    }

    .zqj-booking-btn {
        padding: 8px 14px;
        min-width: auto;
        /* 移除固定最小宽度 */
        /* 超小屏使用更小的自适应间距 */
        padding-left: calc(0.6em + 4px);
        padding-right: calc(0.6em + 4px);
    }
}
</style>