<template>
    <div class="zqj-itab-container">
        <!-- Tab导航栏 -->
        <div class="zqj-itab-nav">
            <div v-for="(tab, index) in zqj_tabOptions" :key="tab.key"
                :class="['zqj-itab-item', { 'zqj-active': zqj_activeIndex === index }]"
                @click="zqj_handleTabClick(index)">
                <span class="zqj-itab-label">{{ tab.label }}</span>
            </div>
        </div>

        <!-- Tab内容区域 -->
        <div class="zqj-itab-content">
            <!-- 航班内容 -->
            <div v-if="zqj_activeIndex === 0" class="zqj-tab-panel">
                <ZhangFlist></ZhangFlist>
                <!-- 历史行程 -->
                 <ZhangHistory/>
            </div>

            <!-- 其他Tab显示404 -->
            <div v-else class="zqj-404-content">
                <div class="zqj-404-icon">📄</div>
                <div class="zqj-404-title">404 - 暂无内容</div>
                <div class="zqj-404-desc">{{ zqj_tabOptions[zqj_activeIndex].label }}功能正在开发中，敬请期待</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ZhangFlist from './ZhangFlist.vue'
import ZhangHistory from './ZhangHistory.vue'

// Tab选项配置
const zqj_tabOptions = ref([
    { key: 'flight', label: '航班' },
    { key: 'train', label: '火车' },
    { key: 'car', label: '用车' },
    { key: 'hotel', label: '酒店' }
])

// 当前激活的Tab索引
const zqj_activeIndex = ref(0)

// Tab点击处理
const zqj_handleTabClick = (index) => {
    zqj_activeIndex.value = index
}
</script>

<style scoped>
.zqj-itab-container {
    background: #fff;
    border-radius: 12px 12px 0 0;
    border-top: 1px solid #F1F5F9;
    margin: 0;
    overflow: hidden;
    position: relative;
    
}

.zqj-itab-nav {
    display: flex;
    background: #E8EFF7;
    position: relative;
    z-index: 2;
    
}

.zqj-itab-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    margin: 0 -10px;
    color: #999;
    /* 添加倾斜效果 */
    clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
    background: #E8EFF7;
}

.zqj-itab-item.zqj-active {
    background: #fff;
    color: #28a745;
    box-shadow: 0 1px 0 0 #fff;
    z-index: 3;
    /* 选中状态的倾斜效果 */
    clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
}

/* 恢复延伸效果 */
.zqj-itab-item.zqj-active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 8px;
    background: #fff;
    z-index: 2;
    /* 保持倾斜效果与tab一致 */
    clip-path: polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%);
}

/* 第一个tab的延伸效果 */
.zqj-itab-item:first-child {
    margin-left: 0;
    clip-path: polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%);
}

.zqj-itab-item:first-child.zqj-active::after {
    clip-path: polygon(0% 0%, 85% 0%, 100% 100%, 0% 100%);
}

/* 最后一个tab的延伸效果 */
.zqj-itab-item:last-child {
    margin-right: 0;
    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.zqj-itab-item:last-child.zqj-active::after {
    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
}

/* 如果只有一个tab的延伸效果 */
.zqj-itab-item:only-child {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.zqj-itab-item:only-child.zqj-active::after {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.zqj-itab-label {
    font-size: 14px;
    font-weight: 600;
    color: inherit;
    position: relative;
    z-index: 4;
}

.zqj-itab-content {
    padding-top: 20px;
    min-height: 300px;
    background: #fff;
    position: relative;
    z-index: 1;
}

.zqj-tab-panel {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-itab-item {
        padding: 12px 4px;
    }

    .zqj-itab-content {
        padding-top: 16px;
    }
}

@media (max-width: 480px) {
    .zqj-itab-item {
        padding: 10px 2px;
    }

    .zqj-itab-content {
        padding-top: 12px;
    }
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
    min-height: 200px;
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
</style>