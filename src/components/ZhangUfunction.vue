<!--
作者：张祈健
时间：2025年1月27日
功能名称：常用工具组件，显示8个常用工具图标
-->
<template>
    <div class="zqj-ufunction">
        <!-- 顶部标题栏 -->
        <div class="zqj-header">
            <div class="zqj-title">常用工具</div>
            <div class="zqj-view-all">
                <span class="zqj-view-text">查看全部工具和服务</span>
                <van-icon name="arrow" class="zqj-arrow-icon" />
            </div>
        </div>

        <!-- 工具图标网格 -->
        <div class="zqj-tools-grid">
            <!-- 第一行 -->
            <div class="zqj-tools-row">
                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="zhengjian" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">电子证照</div>
                </div>

                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="lianxiren" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">联系人</div>
                </div>

                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="shipin" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">飞行足迹视频</div>
                </div>

                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="ditu" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">乘火车出行</div>
                </div>
            </div>

            <!-- 第二行 -->
            <div class="zqj-tools-row">
                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper zqj-has-badge">
                        <van-icon class-prefix="my-icon" name="jiating" class="zqj-tool-icon" />
                        <div class="zqj-member-badge">会员</div>
                    </div>
                    <div class="zqj-tool-name">家庭行程共享</div>
                </div>

                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="kefu" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">我的客服</div>
                </div>

                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="icon_pk" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">飞行大作战</div>
                </div>

                <div class="zqj-tool-item">
                    <div class="zqj-icon-wrapper">
                        <van-icon class-prefix="my-icon" name="xiangce" class="zqj-tool-icon" />
                    </div>
                    <div class="zqj-tool-name">AI 手机壳</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 作者：张祈健
// 时间：2025年1月27日
// 功能：常用工具组件 - 无交互，纯展示
</script>

<style scoped>
.zqj-ufunction {
    background: white;
    border-radius: 12px;
    margin: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* 顶部标题栏 */
.zqj-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.zqj-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.zqj-view-all {
    display: flex;
    align-items: center;
    gap: 4px;
}

.zqj-view-text {
    font-size: 14px;
    color: #999;
}

.zqj-arrow-icon {
    font-size: 12px;
    color: #999;
}

/* 工具图标网格 */
.zqj-tools-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.zqj-tools-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.zqj-tool-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 25%;
}

.zqj-icon-wrapper {
    position: relative;
    margin-bottom: 8px;
}

.zqj-tool-icon {
    font-size: 32px;
    color: #4cd964;
}

/* 会员徽标 */
.zqj-member-badge {
    position: absolute;
    top: -4px;
    right: -6px;
    background: #ff6b35;
    color: white;
    font-size: 10px;
    padding: 2px 4px;
    border-radius: 6px;
    line-height: 1;
    font-weight: bold;
}

.zqj-tool-name {
    font-size: 12px;
    color: #333;
    text-align: center;
    line-height: 1.3;
    max-width: 100%;
    word-wrap: break-word;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .zqj-ufunction {
        margin: 8px;
        padding: 16px;
    }

    .zqj-header {
        margin-bottom: 16px;
    }

    .zqj-title {
        font-size: 20px;
    }

    .zqj-tools-grid {
        gap: 16px;
    }

    .zqj-tool-icon {
        font-size: 28px;
    }

    .zqj-tool-name {
        font-size: 12px;
    }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
    .zqj-tool-icon {
        font-size: 24px;
    }

    .zqj-tool-name {
        font-size: 12px;
    }

    .zqj-member-badge {
        font-size: 9px;
        padding: 1px 3px;
    }
}
</style>