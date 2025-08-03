<!--
  作者：张祈健
  时间：2025-05-27
  功能名称：订火车票功能组件（带侧边导航、右侧内容展示）
-->

<template>
    <div class="zqj-book-wrapper">
        <!-- 顶部标题栏 -->
        <div class="zqj-header">
            <div class="zqj-title">
                <strong>{{ currentTitle.left }}</strong>
                <span> | {{ currentTitle.right }}</span>
            </div>
            <div class="zqj-tool-btn">
                出行工具 <van-icon name="arrow" color="#4FAA3E" size="12" />
            </div>
        </div>

        <div class="zqj-book-box">
            <!-- 左侧侧边导航栏 -->
            <div class="zqj-nav">
                <div v-for="tab in zqjTabs" :key="tab.key" :class="['zqj-nav-item', { active: activeTab === tab.key }]"
                    @click="onTabClick(tab.key)">
                    {{ tab.label }}
                </div>
            </div>

            <!-- 右侧内容区域 -->
            <div class="zqj-book-content">
                <template v-if="!content.message">
                    <!-- 上部信息展示区 -->
                    <div class="zqj-info-top">
                        <div class="zqj-info-item">
                            <div class="label">出发城市</div>
                            <div class="value">{{ content.departureCity }}</div>
                        </div>
                        <van-icon name="arrow" color="#4cd964" size="20" />
                        <div class="zqj-info-item">
                            <div class="label">到达城市</div>
                            <div class="value">{{ content.arrivalCity }}</div>
                        </div>
                        <div class="zqj-info-item">
                            <div class="label">出发日期</div>
                            <div class="value">{{ content.departureDate }}</div>
                        </div>
                    </div>

                    <!-- 立即购买按钮 -->
                    <van-button class="zqj-buy-btn" color="#4cd964" block round>立即购买</van-button>

                    <!-- 下部功能辅助区 -->
                    <div class="zqj-info-footer">
                        <div class="zqj-left-features">
                            <div v-for="(feature, index) in (content.features || []).slice(0, 2)" :key="feature.label"
                                class="zqj-icon-text">
                                <van-icon :name="feature.icon" class-prefix="my-icon" color="#1989fa" size="18" />
                                <span>{{ feature.label }}</span>
                            </div>
                        </div>
                        <div v-if="content.features && content.features[2]" class="zqj-icon-text">
                            <span>{{ content.features[2].label }}</span>
                            <van-icon :name="content.features[2].icon" class-prefix="my-icon" color="#1989fa"
                                size="18" />
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div class="zqj-404">{{ content.message }}</div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
// 作者：张祈健
// 时间：2025-05-27
// TODO: 使用 useRoute 和 axios 根据路由参数动态请求数据

import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

// 路由与导航
const route = useRoute()
const router = useRouter()
const zqjTabs = ref([])
const activeTab = ref(route.params.tab || 'train')

// 标题与内容
const zqjTitles = ref([])
const content = ref({})

// 计算当前标题
const currentTitle = computed(() => {
    return zqjTitles.value.find(t => t.key === activeTab.value) || { left: '', right: '' }
})

// 方法：加载导航 Tabs
async function loadTabs() {
    try {
        const res = await axios.get('')
        zqjTabs.value = res.data.zbooktabs
    } catch (err) {
        console.error('加载导航Tabs失败:', err)
    }
}

// 方法：加载标题数据
async function loadTitles() {
    try {
        const res = await axios.get('')
        zqjTitles.value = res.data.zbooktitles
    } catch (err) {
        console.error('加载标题数据失败:', err)
    }
}

// 方法：加载内容数据
async function loadContent(tabKey) {
    try {
        const res = await axios.get(`https://zbooom.github.io/travel_app_vue3/zhangdb.json?key=${tabKey}`)
        content.value = res.data.zbookcontent[0] || { message: '404 - 暂无内容' }
    } catch (err) {
        console.error('加载内容数据失败:', err)
        content.value = { message: '404 - 暂无内容' }
    }
}

// 点击导航
function onTabClick(key) {
    activeTab.value = key
    router.replace({ params: { tab: key } })
}

onMounted(async () => {
    await loadTabs()
    await loadTitles()
    await loadContent(activeTab.value)
})

watch(activeTab, (newKey) => {
    loadContent(newKey)
})
</script>

<style scoped>
.zqj-book-wrapper {
    background: linear-gradient(to bottom, #577fd7, #5780d733);
    border-radius: 12px;
    margin: 12px;
    padding: 12px;
}

.zqj-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 14px;
    margin-bottom: 12px;
}

.zqj-title {
    font-size: 14px;
    color: #fff;
    display: flex;
    gap: 4px;
}

.zqj-title strong {
    font-weight: bold;
}

.zqj-title span {
    font-weight: normal;
}

.zqj-tool-btn {
    background: #DFF2DF;
    padding: 5px 6px 5px 25px;
    margin: -5px;
    border-radius: 0px 12px 2px 2px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: #4FAA3E;
    position: relative;
    /* 使用clip-path创建八字型右侧曲线效果 */
    clip-path: path('M15 0 C5 4 18 22 32 32 L100 30 L100 0 Z')
}

.zqj-book-box {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
}

.zqj-nav {
    display: flex;
    flex-direction: column;
    width: 80px;
    background: #f7f7f7;
    /* 移除右侧边框 */
    /* border-right: 1px solid #eee; */
}

.zqj-nav-item {
    text-align: center;
    padding: 12px 0;
    font-size: 14px;
    color: #666;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    /* 为所有tab项添加右侧边框 */
    border-right: 1px solid #eee;
}

.zqj-nav-item.active {
    color: #1989fa;
    background: #fff;
    font-weight: bold;
    border-right: none;
    /* 取消选中项的右侧边框 */
    /* 向右延伸1px，覆盖父容器可能的边框 */
    margin-right: -1px;
    position: relative;
    z-index: 1;
}

.zqj-book-content {
    flex: 1;
    padding: 16px;
}

.zqj-info-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
}

.zqj-info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 72px;
    margin-bottom: 8px;
}

.zqj-info-item .label {
    font-size: 12px;
    color: #999;
}

.zqj-info-item .value {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-top: 4px;
}

.zqj-buy-btn {
    margin: 12px 0;
    font-size: 14px;
}

.zqj-info-footer {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #888;
}

.zqj-left-features {
    display: flex;
    gap: 12px;
}

.zqj-icon-text {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-order {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #888;
}

.zqj-404 {
    text-align: center;
    color: #999;
    font-size: 14px;
    padding: 20px 0;
}
</style>
