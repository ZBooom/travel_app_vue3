<!--
作者：张祈健
时间：2025年1月27日
功能名称：VIP会员卡片组件，显示会员信息和权益
-->
<template>
    <div class="zqj-vip-card">
        <!-- 上半部分：深蓝色背景 -->
        <div class="zqj-vip-header">
            <div class="zqj-vip-info">
                <div class="zqj-vip-title">{{ zqj_vipTitle }}</div>
                <div class="zqj-vip-expire">{{ zqj_expireText }}</div>
            </div>
            <div class="zqj-vip-center-btn" @click="zqj_goToVipCenter">
                {{ zqj_centerBtnText }}
            </div>
        </div>

        <!-- 下半部分：浅棕色背景 -->
        <div class="zqj-vip-benefits">
            <div class="zqj-benefits-info">
                <div class="zqj-benefits-badge">{{ zqj_benefitsBadge }}</div>
                <div class="zqj-benefits-text">{{ zqj_benefitsText }}</div>
            </div>
            <div class="zqj-check-btn" @click="zqj_checkBenefits">
                <span class="zqj-check-text">{{ zqj_checkText }}</span>
                <van-icon name="arrow" class="zqj-arrow-icon" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Props定义
const props = defineProps({
    // VIP标题
    vipTitle: {
        type: String,
        default: 'PLUS会员 经典版'
    },
    // 过期时间文本
    expireText: {
        type: String,
        default: '总有效期至：2025年12月03日'
    },
    // 会员中心按钮文本
    centerBtnText: {
        type: String,
        default: '会员中心'
    },
    // 权益标识
    benefitsBadge: {
        type: String,
        default: '权益上新'
    },
    // 权益文本
    benefitsText: {
        type: String,
        default: '会员优享商城专属价'
    },
    // 查看按钮文本
    checkText: {
        type: String,
        default: '去查看'
    }
})

// Emits定义
const emit = defineEmits(['vip-center-click', 'benefits-check-click'])

// 响应式数据
const zqj_vipTitle = ref(props.vipTitle)
const zqj_expireText = ref(props.expireText)
const zqj_centerBtnText = ref(props.centerBtnText)
const zqj_benefitsBadge = ref(props.benefitsBadge)
const zqj_benefitsText = ref(props.benefitsText)
const zqj_checkText = ref(props.checkText)

// 会员中心点击事件
const zqj_goToVipCenter = () => {
    console.log('点击会员中心')
    emit('vip-center-click')
}

// 权益查看点击事件
const zqj_checkBenefits = () => {
    console.log('点击查看权益')
    emit('benefits-check-click')
}
</script>

<style scoped>
.zqj-vip-card {
    margin: 12px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to right, #FFCC9F, #FFEACF);
}

/* 上半部分：深蓝色背景 */
.zqj-vip-header {
    background: #154b9d;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    color: #F5E2CD;
    border-radius: 12px;
}

.zqj-vip-info {
    flex: 1;
}

.zqj-vip-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3px;
    line-height: 1.2;
    /* 字体倾斜 */
    font-style: italic;
}

.zqj-vip-expire {
    font-size: 14px;
    color: #F5E2CD;
    line-height: 1.3;
    margin-bottom: -2px;
    letter-spacing: 0.5px;
}

.zqj-vip-center-btn {
    background: linear-gradient(to left, #FFCC9F, #FFEACF);
    color: #6C2A14;
    margin-top: 8px;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.zqj-vip-center-btn:hover {
    background: #c19660;
    transform: translateY(-1px);
}

/* 下半部分：浅棕色背景 */
.zqj-vip-benefits {
    background: linear-gradient(to right, #FFCC9F, #FFEACF);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.zqj-benefits-info {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
}

.zqj-benefits-badge {
    background: linear-gradient(to right, #9F7648, #6C2A14);
    color: #FBE4D2;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: bold;
    white-space: nowrap;
    letter-spacing: 0.5px;
}

.zqj-benefits-text {
    font-size: 14px;
    color: #6C2A14;
    font-weight: 500;
    letter-spacing: 0.5px;
}

.zqj-check-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.zqj-check-btn:hover {
    transform: translateX(2px);
}

.zqj-check-text {
    font-size: 14px;
    color: #6C2A14;
    font-weight: 500;
}

.zqj-arrow-icon {
    font-size: 14px;
    color: #6C2A14;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-vip-card {
        margin: 8px;
    }

    .zqj-vip-header {
        padding: 16px;
    }

    .zqj-vip-title {
        font-size: 18px;
    }

    .zqj-vip-expire {
        font-size: 13px;
    }

    .zqj-vip-center-btn {
        margin-top: 6px;
        padding: 6px 12px;
        font-size: 13px;
    }

    .zqj-vip-benefits {
        padding: 8px 16px;
    }
}
</style>