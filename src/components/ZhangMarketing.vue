<!--
作者：张祈健
时间：2025年5月27日
功能名称：营销活动横向展示组件 TODO
-->
<template>
    <div class="zqj-marketing-wrapper">
        <div class="zqj-marketing-item" v-for="item in zqj_marketingList" :key="item.title">
            <van-icon :name="item.icon" class-prefix="my-icon" class="zqj-marketing-icon" />
            <div class="zqj-marketing-text">
                <p class="zqj-marketing-title">{{ item.title }}</p>
                <p class="zqj-marketing-desc">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// 营销项数据
const zqj_marketingList = [
    {
        icon: 'hongbao',
        title: '周二酒店日',
        desc: '直减600元'
    },
    {
        icon: 'hanglvzongheng1',
        title: '会员返利',
        desc: '用车酒店返 3%'
    },
    {
        icon: 'gouwu',
        title: '嗨三亚',
        desc: '领千元礼包'
    }
];
</script>

<style scoped>
.zqj-marketing-wrapper {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    gap: 8px;
}

.zqj-marketing-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-right: 1px solid #f0f0f0;
}

.zqj-marketing-item:last-child {
    border-right: none;
}

.zqj-marketing-icon {
    font-size: 5vw;
    margin-right: 8px;
    color: #f05a28;
}

.zqj-marketing-text {
    display: flex;
    flex-direction: column;
}

.zqj-marketing-title {
    font-weight: bold;
    font-size: 3.7vw;
    color: #000;
    margin-bottom: 2px;
}

.zqj-marketing-desc {
    font-size: 2.9vw;
    color: #888;
}
</style>
