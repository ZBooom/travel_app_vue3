<!--
作者：张祈健
时间：2025年5月27日
功能：分页图标滑动组件，支持指示器固定底部、自适应高度、动态图标配置
-->
<template>
    <div class="zqj-swipe-wrapper">
        <van-swipe :style="{ height: zqj_swipeHeight + 'px' }" indicator-color="transparent"
            @change="zqj_onSwipeChange">
            <van-swipe-item v-for="(zqj_page, zqj_index) in zqj_pages" :key="zqj_index">
                <div class="zqj-page" ref="zqj_pageRefs">
                    <van-grid :column-num="5" :border="false">
                        <van-grid-item v-for="zqj_item in zqj_page" :key="zqj_item.text" class="zqj-grid-item">
                            <svg class="zqj-icon" aria-hidden="true">
                                <use :xlink:href="`#my-icon-${zqj_item.icon}`"></use>
                            </svg>
                            <span class="zqj-icon-text">{{ zqj_item.text }}</span>
                            <span v-if="zqj_item.badge" class="zqj-badge">{{ zqj_item.badge }}</span>
                        </van-grid-item>
                    </van-grid>
                </div>
            </van-swipe-item>
        </van-swipe>

        <div class="zqj-indicator">
            <div v-for="(_, zqj_index) in zqj_pages" :key="zqj_index" class="zqj-dot"
                :class="{ active: zqj_index === zqj_currentPage }"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import '@/assets/fonts/iconfont/iconfont.js'

const zqj_firstPage = [
    { text: '机票', icon: 'feiji' },
    { text: '火车票', icon: 'huochepiao', badge: '火车大屏' },
    { text: '打车/接送机', icon: 'dache' },
    { text: '酒店', icon: 'zhujiudian' },
    { text: '全球免税', icon: 'gouwu' },
    { text: '值机', icon: 'zhiji' },
    { text: '机票验证', icon: 'yanzheng' },
    { text: '租车自驾', icon: 'zuche' },
    { text: 'PLUS会员', icon: 'plus' },
    { text: '地方特产', icon: 'xiangcun' }
]

const zqj_secondPage = [
    { text: '保险', icon: 'hanglvzongheng1' },
    { text: '签证', icon: 'hanglvzongheng1' },
    { text: '顺风车', icon: 'hanglvzongheng1' },
    { text: '接送火车', icon: 'hanglvzongheng1' },
    { text: '机场停车', icon: 'hanglvzongheng1' },
    { text: '休息室', icon: 'hanglvzongheng1' },
    { text: '天天抽免单', icon: 'hanglvzongheng1' },
    { text: '航班雷达', icon: 'hanglvzongheng1' },
    { text: '机场专区', icon: 'hanglvzongheng1' },
    { text: '面对面掼蛋', icon: 'hanglvzongheng1' },
    { text: 'AI手机壳', icon: 'hanglvzongheng1' },
    { text: '聊天大厅', icon: 'hanglvzongheng1' },
    { text: '民航评价', icon: 'hanglvzongheng1' },
    { text: '常客卡', icon: 'hanglvzongheng1' },
    { text: '全部', icon: 'hanglvzongheng1' }
]

const zqj_pages = ref([zqj_firstPage, zqj_secondPage])
const zqj_currentPage = ref(0)
const zqj_swipeHeight = ref(0)
const zqj_pageRefs = ref([])

const zqj_updateHeight = (index) => {
    nextTick(() => {
        const pageList = document.querySelectorAll('.zqj-page')
        if (pageList[index]) {
            zqj_swipeHeight.value = pageList[index].offsetHeight
        }
    })
}

const zqj_onSwipeChange = (index) => {
    zqj_currentPage.value = index
    zqj_updateHeight(index)
}


// 监听窗口大小变化，动态调整高度
const handleResize = () => {
    zqj_updateHeight(zqj_currentPage.value)
}

onMounted(() => {
    zqj_updateHeight(0)
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.zqj-swipe-wrapper {
    position: relative;
    width: 100%;
    transition: height 0.3s;
    background: #EFF1F4;
}

.zqj-page {
    padding: 12px 0 10px;
}

.van-grid-item.zqj-grid-item {
    padding: 4px !important;
    box-sizing: border-box;
}

/* 修改 van-grid-item__content 样式 */
:deep(.van-grid-item__content) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    padding: 2px;
    background: transparent;
}

.zqj-icon {
    width: 8vw;
        height: 8vw;
        max-width: 40px;
        max-height: 40px;
        min-width: 28px;
        min-height: 28px;
        fill: currentColor;
        overflow: hidden;
        display: block;
        margin: 0 auto;
}


.zqj-icon-text {
    display: block;
    margin-top: 4px;
    font-size: 2.9vw;
    color: #333;
    text-align: center;
}

.zqj-badge {
    position: absolute;
    top: 10%;
    left: 80%;
    transform: translate(-50%, -50%);
    background-color: red;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 10px;
    white-space: nowrap;
}

.zqj-indicator {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
}

.zqj-dot {
    width: 6px;
    height: 6px;
    background-color: #ccc;
    border-radius: 3px;
    transition: all 0.3s;
}

.zqj-dot.active {
    width: 16px;
    background-color: #4cd964;
}
</style>
