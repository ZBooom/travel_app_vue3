import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchHistoryStore = defineStore("searchHistory", () => {
  // 搜索历史数据
  const zqj_searchHistory = ref<string[]>([]);

  // 初始化时从localStorage读取数据
  const zqj_initHistory = () => {
    try {
      const history = localStorage.getItem("zqj_expSearchHistory");
      if (history) {
        zqj_searchHistory.value = JSON.parse(history);
      }
    } catch (error) {
      console.error("读取搜索历史失败:", error);
      zqj_searchHistory.value = [];
    }
  };

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
    zqj_saveToStorage();
  };

  // 清除所有搜索历史
  const zqj_clearHistory = () => {
    zqj_searchHistory.value = [];
    zqj_saveToStorage();
  };

  // 删除指定的搜索历史
  const zqj_removeHistory = (keyword: string) => {
    const index = zqj_searchHistory.value.indexOf(keyword);
    if (index > -1) {
      zqj_searchHistory.value.splice(index, 1);
      zqj_saveToStorage();
    }
  };

  // 保存到localStorage
  const zqj_saveToStorage = () => {
    try {
      localStorage.setItem(
        "zqj_expSearchHistory",
        JSON.stringify(zqj_searchHistory.value)
      );
    } catch (error) {
      console.error("保存搜索历史失败:", error);
    }
  };

  // 获取搜索历史
  const zqj_getHistory = () => {
    return zqj_searchHistory.value;
  };

  return {
    zqj_searchHistory,
    zqj_initHistory,
    zqj_addToHistory,
    zqj_clearHistory,
    zqj_removeHistory,
    zqj_getHistory,
  };
});
