<template>
    <div class="zqj-purse">
        <!-- 顶部标题栏 -->
        <div class="zqj-purse-header">
            <div class="zqj-header-title">我的钱包</div>
            <div class="zqj-header-action">
                <span class="zqj-action-text">进入钱包</span>
                <van-icon name="arrow" class="zqj-arrow-icon" />
            </div>
        </div>

        <!-- 余额信息四栏 -->
        <div class="zqj-balance-grid">
            <!-- 我的余额 -->
            <div class="zqj-balance-item">
                <div class="zqj-balance-amount">¥--</div>
                <div class="zqj-balance-label">我的余额</div>
            </div>

            <!-- 礼金余额 -->
            <div class="zqj-balance-item">
                <div class="zqj-balance-amount">¥0</div>
                <div class="zqj-balance-label">礼金余额</div>
            </div>

            <!-- 收益余额 -->
            <div class="zqj-balance-item">
                <div class="zqj-balance-amount">¥--</div>
                <div class="zqj-balance-label">收益余额</div>
            </div>

            <!-- 银行卡 -->
            <div class="zqj-balance-item">
                <div class="zqj-balance-amount">0</div>
                <div class="zqj-balance-label">银行卡</div>
            </div>
        </div>

        <!-- 活动提示栏 -->
        <div class="zqj-activity-banner">
            <div class="zqj-activity-content">
                <van-icon class-prefix="my-icon" name="hongbao" class="zqj-gift-icon" />
                <span class="zqj-activity-text">存钱包余额，兑至高价值 329 元权益</span>
            </div>
            <div class="zqj-activity-action">
                <span class="zqj-action-text">去兑换</span>
                <van-icon class-prefix="my-icon" name="arrow_right_fat" class="zqj-arrow-icon" />
            </div>
        </div>
    </div>
</template>

<script setup>
// 作者：张祈健
// 时间：2025年1月27日
// 功能：我的钱包组件 - 无交互，纯展示
</script>

<style scoped>
.zqj-purse {
    background: white;
    border-radius: 12px;
    margin: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* 顶部标题栏 */
.zqj-purse-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 2px;
}

.zqj-header-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.zqj-header-action {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-header-action .zqj-action-text {
    font-size: 14px;
    color: #666;
}

.zqj-header-action .zqj-arrow-icon {
    font-size: 12px;
    color: #666;
}

/* 余额信息四栏 */
.zqj-balance-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 20px 0;
}

.zqj-balance-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 0 10px;
}

.zqj-balance-amount {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    line-height: 1.2;
}

.zqj-balance-label {
    font-size: 13px;
    color: #666;
    line-height: 1.2;
}

/* 活动提示栏 */
.zqj-activity-banner {
    background: #FCF0EB;
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.zqj-activity-content {
    display: flex;
    align-items: center;
    gap: 3px;
    flex: 1;
}

.zqj-gift-icon {
    font-size: 18px;
    color: #ff6b35;
}

.zqj-activity-text {
    font-size: 14px;
    color: #734023;
    line-height: 1.3;
}

.zqj-activity-action {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-action-text {
    font-size: 14px;
    color: #734023;
}

.zqj-arrow-icon {
    font-size: 12px;
    color: #734023;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-purse {
        margin: 8px;
    }

    .zqj-purse-header {
        padding: 16px 16px 1px;
    }

    .zqj-balance-grid {
        padding: 16px 0;
    }

    .zqj-balance-item {
        padding: 0 8px;
    }

    .zqj-balance-amount {
        font-size: 16px;
    }

    .zqj-balance-label {
        font-size: 12px;
    }

    .zqj-activity-banner {
        padding: 10px 16px;
    }

    .zqj-activity-text {
        font-size: 13px;
    }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
    .zqj-balance-amount {
        font-size: 15px;
    }

    .zqj-balance-label {
        font-size: 12px;
    }

    .zqj-activity-text {
        font-size: 13px;
    }

    .zqj-action-text {
        font-size: 13px;
    }
}
</style>