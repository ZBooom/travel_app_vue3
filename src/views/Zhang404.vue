<!--
作者：张祈健
时间：2025年1月27日
功能名称：404错误页面
-->
<template>
    <div class="zqj-404-page">
        <!-- 404图标和内容 -->
        <div class="zqj-404-content">
            <div class="zqj-404-icon">🔍</div>
            <h1 class="zqj-404-title">404</h1>
            <p class="zqj-404-subtitle">页面不存在</p>
            <p class="zqj-404-desc">抱歉，您访问的页面不存在或已被删除</p>

            <!-- 操作按钮 -->
            <div class="zqj-404-actions">
                <van-button type="primary" round class="zqj-back-btn" @click="zqj_goBack">
                    返回上页
                </van-button>
                <van-button round class="zqj-home-btn" @click="zqj_goHome">
                    回到首页
                </van-button>
            </div>
        </div>

        <!-- 装饰元素 -->
        <div class="zqj-decorations">
            <div class="zqj-decoration zqj-decoration-1"></div>
            <div class="zqj-decoration zqj-decoration-2"></div>
            <div class="zqj-decoration zqj-decoration-3"></div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 返回上一页
const zqj_goBack = () => {
    if (window.history.length > 1) {
        router.back()
    } else {
        router.push('/')
    }
}

// 回到首页
const zqj_goHome = () => {
    router.push('/')
}
</script>

<style scoped>
.zqj-404-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
}

.zqj-404-content {
    text-align: center;
    z-index: 2;
    position: relative;
    background: rgba(255, 255, 255, 0.95);
    padding: 60px 40px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    max-width: 500px;
    width: 100%;
}

.zqj-404-icon {
    font-size: 80px;
    margin-bottom: 20px;
    display: block;
    animation: zqj_bounce 2s infinite;
}

.zqj-404-title {
    font-size: 120px;
    font-weight: bold;
    color: #667eea;
    margin: 0 0 10px 0;
    line-height: 1;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.zqj-404-subtitle {
    font-size: 28px;
    color: #333;
    margin: 0 0 15px 0;
    font-weight: 600;
}

.zqj-404-desc {
    font-size: 16px;
    color: #666;
    margin: 0 0 40px 0;
    line-height: 1.5;
}

.zqj-404-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.zqj-back-btn {
    background: #667eea;
    border: none;
    font-size: 16px;
    padding: 12px 24px;
    min-width: 120px;
}

.zqj-home-btn {
    background: #fff;
    color: #667eea;
    border: 2px solid #667eea;
    font-size: 16px;
    padding: 12px 24px;
    min-width: 120px;
}

.zqj-home-btn:hover {
    background: #667eea;
    color: #fff;
}

/* 装饰元素 */
.zqj-decorations {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    overflow: hidden;
}

.zqj-decoration {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: zqj_float 6s ease-in-out infinite;
}

.zqj-decoration-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
    animation-delay: -2s;
}

.zqj-decoration-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 15%;
    animation-delay: -4s;
}

.zqj-decoration-3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 20%;
    animation-delay: -1s;
}

/* 动画 */
@keyframes zqj_bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-20px);
    }

    60% {
        transform: translateY(-10px);
    }
}

@keyframes zqj_float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(180deg);
    }
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-404-content {
        padding: 40px 20px;
        margin: 0 10px;
    }

    .zqj-404-icon {
        font-size: 60px;
    }

    .zqj-404-title {
        font-size: 80px;
    }

    .zqj-404-subtitle {
        font-size: 24px;
    }

    .zqj-404-desc {
        font-size: 14px;
    }

    .zqj-404-actions {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }

    .zqj-back-btn,
    .zqj-home-btn {
        width: 100%;
        max-width: 200px;
    }
}

@media (max-width: 480px) {
    .zqj-404-page {
        padding: 10px;
    }

    .zqj-404-content {
        padding: 30px 15px;
    }

    .zqj-404-icon {
        font-size: 50px;
    }

    .zqj-404-title {
        font-size: 60px;
    }

    .zqj-404-subtitle {
        font-size: 20px;
    }

    .zqj-404-desc {
        font-size: 13px;
        margin-bottom: 30px;
    }
}
</style>
