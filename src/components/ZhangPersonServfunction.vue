<template>
    <div class="zqj-person-serv">
        <div v-for="item in zqj_serviceList" :key="item.key" class="zqj-service-item">
            <!-- 图标区域 -->
            <div class="zqj-icon-wrapper">
                <van-icon class-prefix="my-icon" :name="item.icon" class="zqj-service-icon" />
            </div>

            <!-- 功能名称 -->
            <div class="zqj-service-name">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 写死的服务数据
const zqj_serviceList = ref([
    { key: 'orders', name: '我的订单', icon: 'dingdan' },
    { key: 'certificates', name: '我的证件', icon: 'mingpian' },
    { key: 'cardpack', name: '我的卡包', icon: 'qiabao' },
    { key: 'benefits', name: '票券权益', icon: 'dianyingpiao' }
])
</script>

<style scoped>
.zqj-person-serv {
    background: white;
    border-radius: 12px;
    margin: 12px;
    padding: 16px 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.zqj-service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    flex: 1;
    padding: 8px 4px;
}

.zqj-service-item:hover {
    transform: translateY(-2px);
}

.zqj-icon-wrapper {
    margin-bottom: 8px;
}

.zqj-service-icon {
    font-size: 28px;
    color: #4cd964;
    transition: all 0.3s ease;
}

.zqj-service-item:hover .zqj-service-icon {
    color: #3cb058;
    transform: scale(1.1);
}

.zqj-service-name {
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 1.2;
    font-weight: 500;
}

.zqj-service-item:hover .zqj-service-name {
    color: #4cd964;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-person-serv {
        padding: 12px 12px;
        margin: 8px;
    }

    .zqj-service-icon {
        font-size: 24px;
    }

    .zqj-service-name {
        font-size: 13px;
    }

    .zqj-service-item {
        padding: 6px 2px;
    }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
    .zqj-service-icon {
        font-size: 22px;
    }

    .zqj-service-name {
        font-size: 12px;
    }
}
</style>