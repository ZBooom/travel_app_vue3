<!--
作者：张祈健
时间：2025年1月27日
功能名称：用户头像区域组件，显示头像、用户名、会员图标和提示信息
-->
<template>
    <div class="zqj-avatar-section" @click="zqj_handleClick">
        <!-- 左侧用户头像 -->
        <div class="zqj-avatar">
            <img :src="zqj_avatarUrl" :alt="zqj_userName" class="zqj-avatar-img" />
        </div>

        <!-- 中间用户信息区域 -->
        <div class="zqj-user-info">
            <!-- 第一行：用户名和会员图标 -->
            <div class="zqj-user-name-row">
                <span class="zqj-user-name">{{ zqj_userName }}</span>
                <van-icon class-prefix="my-icon" name="huiyuan" class="zqj-vip-icon" />
            </div>

            <!-- 第二行：提示信息 -->
            <div class="zqj-tip-text">
                {{ zqj_tipText }}
            </div>
        </div>

        <!-- 右侧箭头图标 -->
        <div class="zqj-arrow">
            <van-icon name="arrow" class="zqj-arrow-icon" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props定义
const props = defineProps({
    // 用户头像
    avatar: {
        type: String,
        default: '1.jpg'
    },
    // 用户名
    userName: {
        type: String,
        default: '用户名'
    },
    // 提示文本
    tipText: {
        type: String,
        default: '已建立虚拟互动飞行形象，点击查看'
    }
})

// Emits定义
const emit = defineEmits(['click'])

// 响应式数据
const zqj_userName = ref(props.userName)
const zqj_tipText = ref(props.tipText)

// 计算属性 - 头像URL
const zqj_avatarUrl = computed(() => {
    return new URL(`../assets/images/${props.avatar}`, import.meta.url).href
})

// 点击事件处理
const zqj_handleClick = () => {
    console.log('点击用户头像区域')
    emit('click')
}
</script>

<style scoped>
.zqj-avatar-section {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    border-radius: 12px;
    margin: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.zqj-avatar-section:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 左侧头像 */
.zqj-avatar {
    flex-shrink: 0;
    margin-right: 16px;
}

.zqj-avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #f0f0f0;
}

/* 中间用户信息区域 */
.zqj-user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* 第一行：用户名和会员图标 */
.zqj-user-name-row {
    display: flex;
    align-items: center;
    gap: 8px;
}

.zqj-user-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    line-height: 1.2;
}

.zqj-vip-icon {
    font-size: 16px;
    color: #ffa500;
}

/* 第二行：提示信息 */
.zqj-tip-text {
    font-size: 14px;
    color: #999;
    line-height: 1.3;
}

/* 右侧箭头 */
.zqj-arrow {
    flex-shrink: 0;
    margin-left: 12px;
}

.zqj-arrow-icon {
    font-size: 16px;
    color: #ccc;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-avatar-section {
        padding: 14px 16px;
        margin: 8px;
    }

    .zqj-avatar-img {
        width: 50px;
        height: 50px;
    }

    .zqj-user-name {
        font-size: 16px;
    }

    .zqj-tip-text {
        font-size: 13px;
    }
}
</style>