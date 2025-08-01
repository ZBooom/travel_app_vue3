<!--
作者：张祈健
时间：2025年1月27日
功能名称：经验页面搜索页面，专注于飞行圈内容搜索
-->
<template>
    <div class="zqj-exp-search-page">
        <!-- 顶部搜索栏 -->
        <div class="zqj-search-header">
            <van-icon name="arrow-left" class="zqj-back-icon" @click="zqj_handleBack" />
            <van-search v-model="zqj_searchValue" placeholder="#差旅日记打卡" shape="round" @search="zqj_handleSearch"
                @input="zqj_handleInput" @focus="zqj_handleFocus" ref="zqj_searchRef">
            </van-search>
            <div class="zqj-search-action" @click="zqj_handleSearch">搜索</div>
        </div>

        <!-- 搜索内容 -->
        <div class="zqj-search-content">
            <!-- 热门活动 -->
            <div v-if="!zqj_searchValue" class="zqj-hot-activity">
                <div v-if="zqj_showHotActivity">
                    <div class="zqj-activity-header">
                        <div class="zqj-activity-title">热门活动</div>
                        <van-icon class-prefix="my-icon" name="yincang" class="zqj-hide-icon"
                            @click="zqj_toggleHotActivity" />
                    </div>
                    <div class="zqj-activity-tags">
                        <div v-for="activity in zqj_hotActivities" :key="activity" class="zqj-activity-tag">
                            {{ activity }}
                        </div>
                    </div>
                </div>
                <div v-else class="zqj-collapsed-item" @click="zqj_toggleHotActivity">
                    查看更多热门活动
                </div>
            </div>

            <!-- 搜索历史 -->
            <div v-if="!zqj_searchValue && searchHistoryStore.zqj_searchHistory.length > 0" class="zqj-search-history">
                <div class="zqj-history-header">
                    <span class="zqj-history-title">搜索历史</span>
                    <van-icon class-prefix="my-icon" name="shanchu" class="zqj-clear-icon" @click="zqj_clearHistory" />
                </div>
                <div class="zqj-history-list">
                    <div v-for="item in searchHistoryStore.zqj_searchHistory" :key="item" class="zqj-history-item"
                        @click="zqj_handleHistoryClick(item)">
                        <span class="zqj-history-text">{{ item }}</span>
                    </div>
                </div>
            </div>

            <!-- 热门搜索 -->
            <div v-if="!zqj_searchValue" class="zqj-hot-search">
                <div v-if="zqj_showHotSearch">
                    <div class="zqj-hot-header">
                        <div class="zqj-hot-title">热门搜索</div>
                        <van-icon class-prefix="my-icon" name="yincang" class="zqj-hide-icon"
                            @click="zqj_toggleHotSearch" />
                    </div>
                    <div class="zqj-hot-tags">
                        <div v-for="tag in zqj_hotTags" :key="tag" class="zqj-hot-tag">
                            {{ tag }}
                        </div>
                    </div>
                </div>
                <div v-else class="zqj-collapsed-item" @click="zqj_toggleHotSearch">
                    查看更多热门搜索
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { useSearchHistoryStore } from '@/stores/searchHistory'

const router = useRouter()
const searchHistoryStore = useSearchHistoryStore()

// 响应式数据
const zqj_searchValue = ref('')
const zqj_searchRef = ref(null)

// 显示状态控制
const zqj_showHotActivity = ref(true)
const zqj_showHotSearch = ref(true)

// 热门活动标签
const zqj_hotActivities = ref([
    '差旅日记打卡',
    '机场美食探店',
    '飞行摄影大赛',
    '头等舱体验',
    '延误补偿攻略',
    '免税店购物'
])

// 热门搜索标签
const zqj_hotTags = ref([
    '机场攻略',
    '飞行体验',
    '行李托运',
    '值机流程',
    '延误处理',
    '航空公司',
    '座位选择',
    '餐食评价'
])

// 返回上一页
const zqj_handleBack = () => {
    router.back()
}

// 搜索处理
const zqj_handleSearch = () => {
    if (!zqj_searchValue.value.trim()) return

    // 添加到搜索历史
    searchHistoryStore.zqj_addToHistory(zqj_searchValue.value.trim())

    // 弹窗提示搜索内容
    showToast(`正在搜索：${zqj_searchValue.value}`)
}

// 输入处理
const zqj_handleInput = (value) => {
    // 移除显示结果的逻辑
}

// 聚焦处理
const zqj_handleFocus = () => {
    console.log('搜索框获得焦点')
}

// 搜索历史点击
const zqj_handleHistoryClick = (item) => {
    zqj_searchValue.value = item
    zqj_handleSearch()
}

// 清除搜索历史
const zqj_clearHistory = () => {
    searchHistoryStore.zqj_clearHistory()
}

// 热门活动显示/隐藏切换
const zqj_toggleHotActivity = () => {
    zqj_showHotActivity.value = !zqj_showHotActivity.value
}

// 热门搜索显示/隐藏切换
const zqj_toggleHotSearch = () => {
    zqj_showHotSearch.value = !zqj_showHotSearch.value
}

// 组件挂载
onMounted(() => {
    // 初始化搜索历史
    searchHistoryStore.zqj_initHistory()

    // 自动聚焦搜索框
    nextTick(() => {
        if (zqj_searchRef.value) {
            zqj_searchRef.value.focus()
        }
    })
})
</script>

<style scoped>
.zqj-exp-search-page {
    background: #f5f5f5;
    min-height: 100vh;
}

.zqj-search-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    position: sticky;
    top: 0;
    z-index: 100;
}

.zqj-back-icon {
    font-size: 24px;
    color: #333;
    cursor: pointer;
    flex-shrink: 0;
}

.zqj-search-header :deep(.van-search) {
    flex: 1;
    padding: 0;
    background: transparent;
}

.zqj-search-action {
    color: #41B24E;
    font-size: 16px;
    cursor: pointer;
    padding: 0 8px;
    flex-shrink: 0;
    white-space: nowrap;
}

.zqj-search-content {
    padding: 16px;
}

/* 公共样式：标题和内容文字大小 */
.zqj-activity-title,
.zqj-hot-title,
.zqj-history-title {
    font-size: 17px;
    color: #999;
}

.zqj-activity-tag,
.zqj-hot-tag,
.zqj-history-text {
    font-size: 17px;
    font-weight: bold;
    color: #333;
}

/* 热门活动样式 */
.zqj-hot-activity {
    margin-bottom: 24px;
}

.zqj-activity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.zqj-activity-title {
    margin-bottom: 0;
}

.zqj-activity-tags {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.zqj-activity-tag {
    padding: 3px 0;
    transition: all 0.3s ease;
    font-weight: 500;
    text-align: left;
}

/* 热门搜索样式 */
.zqj-hot-search {
    margin-bottom: 24px;
}

.zqj-hot-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.zqj-hot-title {
    margin-bottom: 0;
}

.zqj-hot-tags {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.zqj-hot-tag {
    padding: 3px 0;
    transition: all 0.3s ease;
    text-align: left;
    font-weight: normal;
}

/* 搜索历史 */
.zqj-search-history {
    margin-bottom: 24px;
}

.zqj-history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.zqj-clear-icon {
    font-size: 18px;
    color: #999;
    cursor: pointer;
}

.zqj-history-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.zqj-history-item {
    display: flex;
    align-items: center;
    padding: 3px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.zqj-history-item:hover {
    background: #f8f9fa;
}

.zqj-history-text {
    text-align: left;
    width: 100%;
    font-weight: normal;
}

/* 隐藏图标样式 */
.zqj-hide-icon {
    font-size: 20px;
    color: #999;
    cursor: pointer;
    transition: color 0.3s ease;
}

.zqj-hide-icon:hover {
    color: #666;
}

/* 折叠状态样式 */
.zqj-collapsed-item {
    background: #f8f9fa;
    border: 1px solid #e5e5e5;
    border-radius: 20px;
    padding: 5px 30px;
    text-align: center;
    font-size: 16px;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-search-header {
        padding: 10px 12px;
    }

    .zqj-search-content {
        padding: 12px;
    }
}
</style>
