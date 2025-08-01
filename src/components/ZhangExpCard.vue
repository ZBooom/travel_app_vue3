<template>
    <div class="zqj-exp-card" :class="zqj_cardClass">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'weekly', 'airport'].includes(value)
    },
    rounded: {
        type: Boolean,
        default: true
    },
    shadow: {
        type: Boolean,
        default: true
    }
})

const zqj_cardClass = computed(() => ({
    [`zqj-card-${props.type}`]: true,
    'zqj-rounded': props.rounded,
    'zqj-shadow': props.shadow
}))
</script>

<style scoped>
.zqj-exp-card {
    position: relative;
    background: #fff;
    overflow: hidden;
    transition: all 0.3s ease;
    box-sizing: border-box;
    width: 100%;
    /* 增加默认高度 */
    height: 200px;
}

/* 圆角与阴影 */
.zqj-rounded {
    border-radius: 16px;
}

.zqj-shadow {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* -------- 媒体查询 -------- */
/* 大于 769px（PC 或平板大屏），增加高度 */
@media (min-width: 769px) {
    .zqj-exp-card {
        width: 100%;
        height: 200px;
        /* 从160px增加到200px */
    }
}

/* 手机端：增加高度 */
@media (max-width: 768px) {
    .zqj-exp-card {
        width: calc(50% - 6px);
        height: 35vh;
        /* 从30vh增加到35vh */
        min-height: 150px;
        /* 从120px增加到150px */
        max-height: 250px;
        /* 从200px增加到250px */
    }
}

/* 超小屏增加高度 */
@media (max-width: 480px) {
    .zqj-exp-card {
        height: 32vh;
        /* 从30vh增加到32vh */
        min-height: 130px;
        /* 从100px增加到130px */
        max-height: 220px;
        /* 从180px增加到220px */
    }
}

/* 不同 type 的背景渐变 */
.zqj-card-weekly {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%);
}

.zqj-card-airport {
    background: linear-gradient(135deg, #25B1B1 0%, #21C57F 80%,#1BC594 100%);
}
</style>
