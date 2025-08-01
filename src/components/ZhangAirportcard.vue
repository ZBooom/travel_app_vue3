<!-- AirportCard.vue（或你给的那段代码文件） -->
<template>
    <ZhangExpCard type="airport" class="zqj-airport-wrapper">
        <div class="zqj-airport-bg"></div>
        <div class="zqj-airport-content">
            <!-- 顶部 -->
            <div class="zqj-airport-header">
                <h3 class="zqj-airport-title">机场攻略</h3>
            </div>
            <!-- 中部 -->
            <div class="zqj-airport-body">
                <img :src="zqj_getImg('1.jpg')" class="zqj-plane-img" />
                <div class="zqj-airport-info">
                    <h4 class="zqj-airport-name">青岛胶东机场 .</h4>
                    <p class="zqj-guide-count">共 63 篇攻略</p>
                </div>
            </div>
            <!-- 底部 -->
            <div class="zqj-airport-footer">
                <div class="zqj-location-info">
                    <van-icon name="location" class="zqj-location-icon" />
                    <span class="zqj-location-text">青岛</span>
                </div>
                <van-icon name="arrow" class="zqj-footer-arrow" />
            </div>
        </div>
    </ZhangExpCard>
</template>

<script setup>
import ZhangExpCard from './ZhangExpCard.vue'
const zqj_getImg = (img) => new URL(`../assets/images/${img}`, import.meta.url).href
</script>

<style scoped>
.zqj-airport-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
}

/* 背景层：不影响高度 */
.zqj-airport-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

/* 主要内容区域 - 改为绝对定位填满整个卡片 */
.zqj-airport-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;
}

/* 顶部：标题 */
.zqj-airport-header {
    flex-shrink: 0;
    margin-top: 5px;
    margin-left: 3px;
}

.zqj-airport-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    color: #fff;
    line-height: 1.2;
}

/* 中部主体 - 调整为flex: 1让它占据剩余空间 */
.zqj-airport-body {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 75%;
    margin-top: 12px;
    padding: 10px;
    overflow: hidden;
    background: linear-gradient(120deg, #1ba36a 30%, #11A267 80%);
    border-radius: 12px;
    border: 1px solid #2DC391;
    min-height: 0;
}

.zqj-plane-img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
}

.zqj-airport-info {
    flex: 1;
    overflow: hidden;
    min-width: 0;
}

.zqj-airport-name {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 4px 0;
    color: #fff;
    line-height: 1.2;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.zqj-guide-count {
    font-size: 14px;
    color: #9ED2BC;
    margin: 0;
    line-height: 1.2;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

/* 底部区域 */
.zqj-airport-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin-top: 8px;
}

.zqj-location-info {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-location-icon {
    color: #fff;
    font-size: 14px;
    flex-shrink: 0;
}

.zqj-location-text {
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
}

.zqj-footer-arrow {
    color: #fff;
    font-size: 14px;
    flex-shrink: 0;
}

/* 移动端微调 */
@media (max-width: 768px) {
    .zqj-airport-content {
        padding: 10px;
    }


    .zqj-plane-img {
        width: 40px;
        height: 40px;
    }

    .zqj-airport-name {
        font-size: 15px;
    }

    .zqj-guide-count {
        font-size: 12px;
    }
}

@media (max-width: 480px) {
    .zqj-airport-content {
        padding: 8px;
    }

    .zqj-plane-img {
        width: 36px;
        height: 36px;
    }

    .zqj-airport-name {
        font-size: 13px;
    }

    .zqj-guide-count {
        font-size: 10px;
    }
}
</style>
