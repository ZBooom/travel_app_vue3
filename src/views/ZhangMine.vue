<template>
    <div class="zhang-mine">
        <!-- header -->
        <div class="zqj-header">
            <div class="zqj-header-left">
                <!-- 左侧可以放标题或其他内容，现在留空 -->
            </div>
            <div class="zqj-header-right">
                <van-icon class-prefix="my-icon" name="chat02" class="zqj-header-icon" />
                <van-icon class-prefix="my-icon" name="saoyisao1" class="zqj-header-icon zqj-bold-icon" />
                <van-icon class-prefix="my-icon" name="shezhi1" class="zqj-header-icon zqj-bold-icon"
                    @click="zqj_handleSettings" />
            </div>
        </div>
        <ZhangAvatarsection></ZhangAvatarsection>
        <ZhangVipcard></ZhangVipcard>
        <ZhangPersonServfunction></ZhangPersonServfunction>

        <!-- 轮播图 -->
        <van-swipe class="zqj-mine-swipe" :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="(image, index) in zqj_swipeImages" :key="index">
                <img :src="image.url" :alt="image.alt" class="zqj-swipe-image" />
            </van-swipe-item>
        </van-swipe>

        <ZhangPurse></ZhangPurse>
        <ZhangUfunction />
        <!-- 页面内容 -->
    </div>
    <ZhangFooter></ZhangFooter>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ZhangFooter from '@/components/ZhangFooter.vue'
import ZhangAvatarsection from '@/components/ZhangAvatarsection.vue'
import ZhangVipcard from '@/components/ZhangVipcard.vue'
import ZhangPersonServfunction from '@/components/ZhangPersonServfunction.vue'
import ZhangPurse from '@/components/ZhangPurse.vue'
import ZhangUfunction from '@/components/ZhangUfunction.vue'

const router = useRouter()

// 图片路径获取工具函数
const zqj_getImg = function (img) {
    return new URL(`../assets/images/${img}`, import.meta.url).href;
}

// 设置点击事件
const zqj_handleSettings = () => {
    console.log('点击设置图标')
    router.push('/setting')
}

// 轮播图数据 - 使用工具函数
const zqj_swipeImages = ref([
    {
        url: zqj_getImg('广告横幅1.png'),
        alt: '轮播图1'
    },
    {
        url: zqj_getImg('广告横幅2.png'),
        alt: '轮播图2'
    }
])
</script>

<style scoped>
.zhang-mine {
    background: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 60px;
    /* 为Footer预留空间 */
}

.zqj-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: #f5f5f5;
}

.zqj-header-left {
    flex: 1;
    /* 左侧区域，可以用来放标题等 */
}

.zqj-header-right {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;
    /* 确保右侧对齐 */
}

.zqj-header-icon {
    font-size: 20px;
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
}

/* 只为后两个图标添加加粗效果 */
.zqj-bold-icon {
    font-weight: bold;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

/* 轮播图样式 */
.zqj-mine-swipe {
    height: 100px;
    margin: 12px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.zqj-swipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-mine-swipe {
        margin: 8px;
        height: 100px;
    }
}
</style>