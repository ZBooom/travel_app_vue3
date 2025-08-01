<template>
    <div class="zqj-flist-container">
        <!-- 统计数据列表 -->
        <ul class="zqj-flist">
            <li v-for="(item, index) in zqj_listItems" :key="item.id" class="zqj-flist-item">
                <img :src="zqj_getImg(item.icon)" :alt="item.label" class="zqj-flist-icon">
                <div class="zqj-flist-text">
                    <span class="zqj-flist-number">
                        <template v-for="(part, pIndex) in item.parts" :key="pIndex">
                            <span class="zqj-number-value">{{ part.value }}</span><span class="zqj-number-unit">{{
                                part.unit }}</span>
                        </template>
                    </span>
                    <span class="zqj-flist-label">{{ item.label }}</span>
                </div>
            </li>
        </ul>

        <!-- 更多信息区域 -->
        <div class="zqj-more-info">
            <span class="zqj-more-text">更多航线图、热力图数据</span>
            <van-icon name="arrow" class="zqj-more-arrow" color="#999999" size="16" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 图片获取工具函数
const zqj_getImg = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href
}

// 飞行统计数据
const zqj_listItems = ref([
    {
        id: 'count',
        icon: '累计次数.png',
        parts: [{ value: '27 ', unit: '次' }],
        label: '累计次数'
    },
    {
        id: 'duration',
        icon: '累计时长.png',
        parts: [{ value: '58 ', unit: 'h ' }, { value: '42 ', unit: 'min' }],
        label: '累计时长'
    },
    {
        id: 'mileage',
        icon: '累计里程.png', 
        parts: [{ value: '36739 ', unit: 'km' }],
        label: '累计里程'
    }
])
</script>

<style scoped>
.zqj-flist-container {
    width: 100%;
    background: white;
    padding: 15px 0;
    box-sizing: border-box;
}

.zqj-flist {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    padding-bottom: 48px;
    margin-bottom: -22px;
    height: 100px;
}

.zqj-flist-item {
    flex: 1;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    border-right: 1px solid #eee;
}

.zqj-flist-item:last-child {
    border-right: none;
}

.zqj-flist-icon {
    width: 35px;
    height: 35px;
    margin-bottom: 5px;
    object-fit: cover;
    border-radius: 4px;
}

.zqj-flist-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.zqj-flist-number {
    font-size: 14px;
    margin: 12px 0;
    color: #333;
}

.zqj-number-value {
    font-weight: 600;
    color: #333;
}

.zqj-number-unit {
    font-size: 13px;
    margin-left: 1px;
}

.zqj-flist-label {
    font-size: 12px;
    color: #939597;
    line-height: 1.2;
}

.zqj-more-info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 12px;
    color: #999999;
    position: relative;
    margin-top: -28px;
    text-align: center;
}

.zqj-more-arrow {
    margin-left: 8px;
}

/* 平板设备适配 (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
    .zqj-flist-container {
        padding: 20px 0;
    }

    .zqj-flist {
        height: 120px;
        padding-bottom: 60px;
    }

    .zqj-flist-icon {
        width: 50px;
        height: 50px;
        margin-bottom: 8px;
    }

    .zqj-flist-number {
        font-size: 18px;
    }

    .zqj-flist-label {
        font-size: 13px;
    }

    .zqj-more-text {
        font-size: 13px;
    }
}

/* 手机设备适配 (最大768px) */
@media (max-width: 768px) {
    .zqj-flist-container {
        padding: 12px 0;
    }

    .zqj-flist {
        height: 90px;
        padding-bottom: 40px;
        margin-bottom: -18px;
    }

    .zqj-flist-item {
        padding: 3px;
    }

    .zqj-flist-number {
        font-size: 16px;
        margin-bottom: 5px;
    }

    .zqj-flist-label {
        font-size: 13px;
    }

    .zqj-more-info {
        margin-top: 5px;
        /* 确保移动端也居中 */
        justify-content: center;
    }

    .zqj-more-text {
        font-size: 13px;
    }
}

/* 超宽屏设备适配 (大于1200px) */
@media (min-width: 1200px) {
    .zqj-flist-container {
        padding: 25px 0;
        max-width: 800px;
        margin: 0 auto;
    }

    .zqj-flist {
        height: 140px;
        padding-bottom: 70px;
    }

    .zqj-flist-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
    }

    .zqj-flist-number {
        font-size: 20px;
        margin-bottom: 5px
    }

    .zqj-flist-label {
        font-size: 14px;
    }

    .zqj-more-text {
        font-size: 14px;
    }

    .zqj-more-arrow {
        width: 18px;
        height: 18px;
        margin-left: 10px;
    }
}
</style>