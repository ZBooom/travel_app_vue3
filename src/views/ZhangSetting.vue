<!--
作者：张祈健
时间：2025年1月27日
功能名称：设置页面，展示设置选项和退出登录功能
-->
<template>
    <div class="zqj-setting-page">
        <!-- 顶部导航栏 -->
        <div class="zqj-header">
            <van-icon name="arrow-left" class="zqj-back-icon" @click="zqj_handleBack" />
            <h1 class="zqj-title">设置</h1>
            <div class="zqj-placeholder"></div>
        </div>

        <!-- 设置项列表 -->
        <div class="zqj-settings-list">
            <div v-for="setting in zqj_settingsData" :key="setting.id" class="zqj-setting-item"
                @click="zqj_handleSettingClick(setting)">
                <span class="zqj-setting-text">{{ setting.category }}</span>
                <van-icon name="arrow" class="zqj-arrow-icon" />
            </div>
        </div>

        <!-- 退出登录按钮 -->
        <div class="zqj-logout-section">
            <van-button class="zqj-logout-btn" block round @click="zqj_handleLogout">
                退出登录
            </van-button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

// 响应式数据
const zqj_settingsData = ref([])

// 获取设置数据
const zqj_getSettingsData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/zsettings')
        zqj_settingsData.value = response.data
        console.log('设置数据加载成功:', response.data)
    } catch (error) {
        console.error('获取设置数据失败:', error)
    }
}

// 返回上一页
const zqj_handleBack = () => {
    router.back()
}

// 设置项点击处理
const zqj_handleSettingClick = (setting) => {
    console.log('点击设置项:', setting)
    // TODO: 根据不同的设置项跳转到对应页面
}

// 退出登录处理
const zqj_handleLogout = () => {
    console.log('退出登录')
    // TODO: 实现退出登录逻辑
    // 可以显示确认对话框
    // 清除用户数据
    // 跳转到登录页面
}

onMounted(() => {
    zqj_getSettingsData()
})
</script>

<style scoped>
.zqj-setting-page {
    background: #f5f5f5;
    min-height: 100vh;
    padding-bottom: 80px;
    /* 为底部按钮预留空间 */
    position: relative;
}

.zqj-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 20px;
    /* 从16px 20px改为32px 20px */
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
}

.zqj-back-icon {
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
}

.zqj-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0;
    text-align: center;
}

.zqj-placeholder {
    width: 24px;
    height: 24px;
}

.zqj-settings-list {
    background: #fff;
    overflow: hidden;
}

.zqj-setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 20px;
    /* 从16px 20px改为32px 20px */
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.zqj-setting-item:last-child {
    border-bottom: none;
}

.zqj-setting-item:hover {
    background-color: #f8f9fa;
}

.zqj-setting-item:active {
    background-color: #f0f1f2;
}

.zqj-setting-text {
    font-size: 19px;
    /* 从16px调整为19px，与退出登录按钮一致 */
    color: #333;
    font-weight: 500;
}

.zqj-arrow-icon {
    font-size: 16px;
    color: #999;
}

.zqj-logout-section {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f5f5f5;
    padding: 32px 20px 42px 20px;
    /* 从32px 20px改为32px 20px 42px 20px，下padding增加10px */
    z-index: 99;
}

.zqj-logout-btn {
    background: #fff;
    border: 1px solid #c5c5c5;
    color: #666;
    font-size: 19px;
    height: 68px;
    /* 从48px改为68px，增加20px（上下各10px） */
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-header {
        padding: 24px 16px;
        /* 从12px 16px改为24px 16px */
    }

    .zqj-title {
        font-size: 17px;
    }

    .zqj-setting-item {
        padding: 28px 16px;
        /* 从14px 16px改为28px 16px */
    }

    .zqj-setting-text {
        font-size: 18px;
        /* 从15px调整为18px，与退出登录按钮一致 */
    }

    .zqj-logout-section {
        padding: 24px 16px 34px 16px;
        /* 从24px 16px改为24px 16px 34px 16px，下padding增加10px */
    }

    .zqj-logout-btn {
        height: 64px;
        /* 从44px改为64px，增加20px */
        font-size: 18px;
    }
}

@media (max-width: 480px) {
    .zqj-header {
        padding: 20px 12px;
        /* 从10px 12px改为20px 12px */
    }

    .zqj-title {
        font-size: 16px;
    }

    .zqj-setting-item {
        padding: 24px 12px;
        /* 从12px 12px改为24px 12px */
    }

    .zqj-setting-text {
        font-size: 17px;
        /* 从14px调整为17px，与退出登录按钮一致 */
    }

    .zqj-logout-section {
        padding: 20px 12px 30px 12px;
        /* 从20px 12px改为20px 12px 30px 12px，下padding增加10px */
    }

    .zqj-logout-btn {
        height: 60px;
        /* 从40px改为60px，增加20px */
        font-size: 17px;
    }
}
</style>