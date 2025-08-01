<template>
    <div class="zqj-flight-status">
        <!-- 第一行：三列数据 -->
        <div class="zqj-status-row">
            <!-- 第一列：距上次飞行 -->
            <div class="zqj-status-item">
                <div class="zqj-status-label">距上次飞行</div>
                <div class="zqj-status-value">
                    <span class="zqj-value-text">28天</span>
                    <van-icon name="arrow" class="zqj-arrow-icon" />
                </div>
            </div>

            <!-- 第二列：已超越 -->
            <div class="zqj-status-item">
                <div class="zqj-status-label">已超越</div>
                <div class="zqj-status-value">
                    <span class="zqj-value-text">84.21%</span>
                    <van-icon name="arrow" class="zqj-arrow-icon" />
                </div>
            </div>

            <!-- 第三列：乘火车出行 -->
            <div class="zqj-status-item">
                <div class="zqj-status-label">乘火车出行</div>
                <div class="zqj-status-value">
                    <span class="zqj-value-text">12次</span>
                    <van-icon name="arrow" class="zqj-arrow-icon" />
                </div>
            </div>
        </div>

        <!-- 第二行：机场概况 -->
        <div class="zqj-airport-row">
            <div class="zqj-airport-info">
                <span class="zqj-airport-title"><span class="zqj-airport-highlight">机场</span>概况</span>
                <span class="zqj-airport-desc">大连周水子机场流量正常</span>
            </div>
            <div class="zqj-flight-info">
                <span class="zqj-flight-status-text">0延误 1取消</span>
                <van-icon name="arrow" class="zqj-arrow-icon" />
            </div>
        </div>
    </div>
</template>

<script setup>
// 该组件主要展示静态数据，无需响应式数据
</script>

<style scoped>
.zqj-flight-status {
    background: #fff;
    border-radius: 12px;
    padding: 16px;
    margin: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 第一行：三列布局 */
.zqj-status-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.zqj-status-item {
    flex: 1;
    text-align: left;
    padding: 0 30px;
    /* 从16px增加到30px */
    position: relative;
}

/* 左分割线 - 除了第一个元素 */
.zqj-status-item:not(:first-child)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 30px;
    background: #e5e5e5;
}

/* 右分割线 - 除了最后一个元素 */
.zqj-status-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 30px;
    background: #e5e5e5;
}

.zqj-status-label {
    font-size: 12px;
    color: #666;
    margin-bottom: 6px;
    line-height: 1.2;
}

.zqj-status-value {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* 从center改为flex-start */
    gap: 4px;
}

.zqj-value-text {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.zqj-arrow-icon {
    font-size: 12px;
    color: #999;
}

/* 第二行：机场概况 */
.zqj-airport-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid #f0f0f0;
}

.zqj-airport-info {
    display: flex;
    align-items: center;
    /* 垂直居中对齐 */
    gap: 8px;
    /* 标题和描述的间距 */
    padding-left: 25px;
}

.zqj-airport-title {
    font-size: 13px;
    font-weight: bold;
    color: #333;
}

.zqj-airport-desc {
    font-size: 14px;
    color: #333;
}

.zqj-airport-highlight {
    color: #28a745;
}

.zqj-flight-info {
    display: flex;
    align-items: center;
    gap: 6px;
}

.zqj-flight-status-text {
    font-size: 14px;
    color: #333;
    white-space: nowrap;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-flight-status {
        margin: 8px;
        padding: 12px;
    }

    .zqj-status-item {
        padding: 0 30px;
        /* 保持30px最小值 */
    }

    .zqj-status-label {
        font-size: 11px;
    }

    .zqj-value-text {
        font-size: 15px;
    }

    .zqj-airport-title {
        font-size: 12px;
    }

    .zqj-airport-desc {
        font-size: 13px;
    }

    .zqj-flight-status-text {
        font-size: 13px;
    }

    /* 移动端调整分割线高度 */
    .zqj-status-item:not(:first-child)::before,
    .zqj-status-item:not(:last-child)::after {
        height: 25px;
    }
}

@media (max-width: 480px) {
    .zqj-status-label {
        font-size: 10px;
    }

    .zqj-value-text {
        font-size: 14px;
    }

    .zqj-airport-desc {
        font-size: 12px;
    }

    .zqj-flight-status-text {
        font-size: 12px;
    }

    .zqj-status-item {
        padding: 0 30px;
        /* 超小屏仍保持30px最小值 */
    }

    /* 超小屏进一步调整分割线高度 */
    .zqj-status-item:not(:first-child)::before,
    .zqj-status-item:not(:last-child)::after {
        height: 20px;
    }
}
</style>