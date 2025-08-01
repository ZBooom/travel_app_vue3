import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchHistoryStore = defineStore(
  "searchHistory",
  () => {
    // 搜索历史数据
    const zqj_searchHistory = ref<string[]>([]);

    // 添加搜索历史
    const zqj_addToHistory = (keyword: string) => {
      if (!keyword.trim()) return;

      const history = [...zqj_searchHistory.value];
      const index = history.indexOf(keyword);

      // 如果已存在，先移除
      if (index > -1) {
        history.splice(index, 1);
      }

      // 添加到开头
      history.unshift(keyword);

      // 限制历史记录数量
      if (history.length > 10) {
        history.splice(10);
      }

      zqj_searchHistory.value = history;
    };

    // 清除所有搜索历史
    const zqj_clearHistory = () => {
      zqj_searchHistory.value = [];
    };

    // 删除指定的搜索历史
    const zqj_removeHistory = (keyword: string) => {
      const index = zqj_searchHistory.value.indexOf(keyword);
      if (index > -1) {
        zqj_searchHistory.value.splice(index, 1);
      }
    };

    // 获取搜索历史
    const zqj_getHistory = () => {
      return zqj_searchHistory.value;
    };

    return {
      zqj_searchHistory,
      zqj_addToHistory,
      zqj_clearHistory,
      zqj_removeHistory,
      zqj_getHistory,
    };
  },
  {
    persist: {
      key: "zqj_expSearchHistory",
      storage: localStorage,
      paths: ["zqj_searchHistory"],
    },
  }
);
