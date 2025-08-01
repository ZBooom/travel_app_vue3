<template>
    <div class="flight-card">
        <div class="flight-info">
            <div class="flight-header">
                <div class="left">
                    <!-- 使用vant自定义icon替换图片 -->
                    <svg class="airline-logo" aria-hidden="true">
                        <use :xlink:href="`#my-icon-${flight.airlineIcon}`"></use>
                    </svg>
                    <span>{{ flight.airlineName }} {{ flight.flightNumber }}</span>
                </div>
                <span class="status">{{ flight.used }}</span>
            </div>
            <div class="time-info">
                <!-- 出发信息 -->
                <div class="time-block">
                    <span class="time">{{ flight.departureTime }}</span>
                    <span class="airport">{{ flight.departureAirport }}</span>
                </div>
                <!-- 到达信息 -->
                <div class="time-block">
                    <span class="time">{{ flight.arrivalTime }}</span>
                    <span class="airport">{{ flight.arrivalAirport }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@/assets/fonts/iconfont/iconfont.js'
defineProps({
    flight: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.flight-card {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 10px 16px;
    margin-bottom: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.flight-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #666;
    /* 与时间字体大小一致 */
}

.airline-logo {
    width: 24px;
    height: 24px;
    font-size: 24px;
}

.status {
    font-size: 14px;
    font-weight: bold;
    color: #999;
}

.time-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
    margin-left: 30px;
    align-items: flex-start;
    /* 左对齐 */
}

.time-block {
    display: flex;
    align-items: center;
    gap: 12px;
}

.time {
    font-size: 16px;
    font-weight: bold;
    /* 时间加粗 */
    color: #000;
}

.airport {
    font-size: 16px;
    /* 与时间字体大小一致 */
    color: #000;
    font-weight: normal;
}
</style>
