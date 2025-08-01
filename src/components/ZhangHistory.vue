<template>
    <div class="flight-history">
        <div class="header">
            <h2>历史行程</h2>
            <button @click="filter" class="filter-button">
                筛选
                <van-icon class-prefix="my-icon" name="arrow_right_fat" class="filter-icon" />
            </button>
        </div>

        <!-- 如果正在加载，显示"加载中" -->
        <div v-if="loading" class="loading-placeholder">
            加载中...
        </div>

        <!-- 加载完成后渲染分组列表 -->
        <div v-else>
            <div v-for="(group, date) in groupedFlights" :key="date" class="date-group">
                <div class="date-flight-row">
                    <!-- 左侧日期列 -->
                    <div class="date-column">
                        <div class="date-info">
                            <div class="month-day">{{ formatMonthDay(date) }}</div>
                            <div class="year">{{ formatYear(date) }}</div>
                        </div>
                    </div>

                    <!-- 右侧航班卡片列 -->
                    <div class="flight-column">
                        <div v-for="flight in group" :key="flight.id">
                            <ZhangFlightCard :flight="flight" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- 如果没有任何航班，显示空状态 -->
            <div v-if="!flights.length && !loading" class="empty-state">
                暂无行程
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import ZhangFlightCard from './ZhangFlightCard.vue'

// 响应式变量：存储航班列表和加载状态
const flights = ref([])
const loading = ref(true)

// 从 json-server 拉取航班数据
const fetchFlights = async () => {
    try {
        const response = await axios.get('/zflights')
        flights.value = response.data
    } catch (err) {
        console.error('请求失败:', err)
    } finally {
        loading.value = false
    }
}

onMounted(fetchFlights)

// 将 flights 按 date 分组，返回一个 { “YYYY-MM-DD”: [flight, …], … } 的对象
const groupedFlights = computed(() => {
    return flights.value.reduce((acc, flight) => {
        if (!acc[flight.date]) {
            acc[flight.date] = []
        }
        acc[flight.date].push(flight)
        return acc
    }, {})
})

// 将 "YYYY-MM-DD" 格式转换为 "MM-DD"
const formatMonthDay = (dateStr) => {
    const [year, month, day] = dateStr.split('-')
    return `${month}-${day}`
}

// 将 "YYYY-MM-DD" 格式转换为年份
const formatYear = (dateStr) => {
    const [year] = dateStr.split('-')
    return year
}

// 占位的筛选方法
const filter = () => {
    alert('筛选功能未实现')
}
</script>

<style scoped>
.flight-history {
    margin: 20px 10px;
    font-family: Arial, sans-serif;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
}

.header h2 {
    margin: 0;
    color: black;
}

.filter-button {
    background: none;
    color: #28a745;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 4px;
}

.filter-icon {
    font-size: 16px;
    color: #28a745;
}

.loading-placeholder,
.empty-state {
    text-align: center;
    padding: 40px 0;
    color: #999;
}

/* 日期和航班的行布局 */
.date-flight-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

/* 左侧日期列 */
.date-column {
    flex-shrink: 0;
    width: 80px;
}

.date-info {
    text-align: left;
    padding: 10px 0 10px 10px;
}

.month-day {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    line-height: 1.2;
}

.year {
    font-size: 14px;
    color: #666;
    margin-top: 2px;
    line-height: 1.2;
}

/* 右侧航班卡片列 */
.flight-column {
    flex: 1;
    min-width: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .date-column {
        width: 70px;
    }

    .month-day {
        font-size: 17px;
    }

    .year {
        font-size: 13px;
    }

    .date-flight-row {
        gap: 12px;
    }
}

@media (max-width: 480px) {
    .date-column {
        width: 60px;
    }

    .month-day {
        font-size: 16px;
    }

    .year {
        font-size: 12px;
    }

    .date-flight-row {
        gap: 10px;
    }
}
</style>
