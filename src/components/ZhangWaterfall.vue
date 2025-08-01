<!--
作者：张祈健
时间：2025年1月27日
功能名称：瀑布流布局组件，展示内容卡片
-->
<template>
    <div class="zqj-waterfall">
        <div class="zqj-waterfall-container">
            <!-- 左列 -->
            <div class="zqj-waterfall-column">
                <ZhangCCard v-for="item in zqj_leftColumn" :key="item.id" :cardData="item" />
            </div>

            <!-- 右列 -->
            <div class="zqj-waterfall-column">
                <ZhangCCard v-for="item in zqj_rightColumn" :key="item.id" :cardData="item" />
            </div>
        </div>

        <!-- 加载更多 -->
        <div v-if="zqj_loading" class="zqj-loading">
            <van-loading type="spinner" />
            <span>加载中...</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ZhangCCard from './ZhangCCard.vue'

// 响应式数据
const zqj_contentList = ref([])
const zqj_leftColumn = ref([])
const zqj_rightColumn = ref([])
const zqj_loading = ref(false)

// 获取内容数据
const zqj_getContentList = async () => {
    zqj_loading.value = true
    try {
        const response = await axios.get('http://localhost:3000/zcontent')
        zqj_contentList.value = response.data
        zqj_distributeContent()
    } catch (error) {
        console.error('获取内容数据失败:', error)
    } finally {
        zqj_loading.value = false
    }
}

// 分配内容到两列
const zqj_distributeContent = () => {
    const leftItems = []
    const rightItems = []

    zqj_contentList.value.forEach((item, index) => {
        if (index % 2 === 0) {
            leftItems.push(item)
        } else {
            rightItems.push(item)
        }
    })

    zqj_leftColumn.value = leftItems
    zqj_rightColumn.value = rightItems
}

onMounted(() => {
    zqj_getContentList()
})
</script>

<style scoped>
.zqj-waterfall {
    padding: 12px;
    /* 为固定Footer预留底部空间，Footer高度是50px，多留10px作为间距 */
    padding-bottom: 60px;
    /* 确保可以正常滚动 */
    height: auto;
    overflow: visible;
}

.zqj-waterfall-container {
    display: flex;
    gap: 12px;
    max-width: 100%;
    /* 确保容器可以正常展开 */
    height: auto;
    overflow: visible;
}

.zqj-waterfall-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    /* 确保列可以正常展开 */
    height: auto;
    overflow: visible;
}

.zqj-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 20px;
    color: #666;
    font-size: 14px;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-waterfall {
        padding: 8px;
        /* 移动端也需要底部空间 */
        padding-bottom: 60px;
    }

    .zqj-waterfall-container {
        gap: 8px;
    }
}
</style>
