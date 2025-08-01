<!--
作者：张祈健
时间：2025年1月27日
功能名称：简化的Tab栏组件，支持横向滑动和绿色指示条
-->
<template>
    <div class="zqj-tab-container">
        <!-- Tab导航栏 -->
        <div class="zqj-tab-nav">
            <div v-for="(tab, index) in zqj_tabs" :key="tab.key || index"
                :class="['zqj-tab-item', { 'zqj-active': zqj_activeIndex === index }]"
                @click="zqj_handleTabClick(index, tab)">
                <span class="zqj-tab-text">{{ tab.label }}</span>
            </div>
        </div>

        <!-- Tab内容区域 -->
        <div class="zqj-tab-content">
            <slot :activeTab="zqj_activeTab" :activeIndex="zqj_activeIndex">
                <div class="zqj-default-content">
                    <p>{{ zqj_activeTab?.content || '暂无内容' }}</p>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Props定义
const props = defineProps({
    // Tab选项数组
    tabs: {
        type: Array,
        required: true,
        default: () => []
    },
    // 默认激活的Tab索引
    defaultActive: {
        type: Number,
        default: 0
    },
    // 粘性顶部距离
    stickyTop: {
        type: [String, Number],
        default: '0px'
    }
})

// Emits定义
const emit = defineEmits(['change', 'click'])

// 响应式数据
const zqj_tabs = ref(props.tabs)
const zqj_activeIndex = ref(props.defaultActive)

// 计算属性
const zqj_activeTab = computed(() => {
    return zqj_tabs.value[zqj_activeIndex.value] || {}
})

// 计算粘性顶部距离
const zqj_stickyTopValue = computed(() => {
    if (typeof props.stickyTop === 'number') {
        return `${props.stickyTop}px`
    }
    return props.stickyTop
})

// 方法
const zqj_handleTabClick = (index, tab) => {
    if (zqj_activeIndex.value !== index) {
        zqj_activeIndex.value = index
        emit('change', index, tab)
    }
    emit('click', index, tab)
}

// 监听props变化
watch(() => props.tabs, (newTabs) => {
    zqj_tabs.value = newTabs
}, { immediate: true })

watch(() => props.defaultActive, (newActive) => {
    zqj_activeIndex.value = newActive
})

// 暴露方法给父组件
defineExpose({
    zqj_setActiveTab: (index) => {
        if (index >= 0 && index < zqj_tabs.value.length) {
            zqj_activeIndex.value = index
        }
    },
    zqj_getActiveTab: () => zqj_activeTab.value,
    zqj_getActiveIndex: () => zqj_activeIndex.value
})
</script>

<style scoped>
.zqj-tab-container {
    width: 100%;
    background: #EFF1F4;
}

.zqj-tab-nav {
    display: flex;
    position: sticky;
    top: v-bind(zqj_stickyTopValue);
    z-index: 99;
    background: #fff;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.zqj-tab-nav::-webkit-scrollbar {
    display: none;
}

.zqj-tab-item {
    position: relative;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    /* 只设置padding控制间距 */
    padding: 12px 14px;
    /* 移除最小宽度，让内容自适应 */
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.zqj-tab-text {
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 1.4;
    font-weight: bold;
    /* 减少字间距 */
    letter-spacing: 0.5px;
}

/* 选中状态的绿色指示条 */
.zqj-tab-item.zqj-active::after {
    content: '';
    position: absolute;
    /* 调整指示条位置，让它离字更近 */
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    /* 增加指示条长度 */
    width: 14px;
    height: 3px;
    background: #4cd964;
    border-radius: 2px;
}

.zqj-tab-content {
    /* 移除最小高度限制，让内容自然滚动 */
    background: #f5f5f5;
}

.zqj-default-content {
    text-align: center;
    color: #999;
    padding: 40px 0;
}
</style>