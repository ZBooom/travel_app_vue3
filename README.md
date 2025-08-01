# 航旅纵横App仿真项目

## 📱 项目简介

这是一个基于Vue3 + TypeScript + Vite开发的移动端H5项目，高度仿真航旅纵横App的界面和功能，包含机票预订、行程管理、内容社区等核心业务模块。

## 🛠️ 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **状态管理**: Pinia
- **路由**: Vue Router
- **UI组件**: Vant UI
- **样式**: CSS3 + 响应式布局
- **动画**: Animate.css

## ✨ 主要功能

- 🏠 **首页**: 仿航旅纵横主界面，包含广告轮播、功能入口
- 📅 **行程管理**: 航班历史记录、行程详情展示
- 📖 **经验分享**: 旅行内容社区
- 👤 **个人中心**: 用户信息、设置页面
- 🔍 **搜索功能**: 支持搜索历史记录

## 🚀 快速开始

### 环境要求
- Node.js >= 16
- npm >= 8

### 安装依赖
```bash
npm install
```

### 🔧 重要说明 - 数据配置

**本项目使用本地Mock数据，数据源文件为 `zhangdb.json`**

数据文件包含：
- `zproducts`: 商品数据
- `zbooktabs`: 预订标签
- `zbooktitles`: 预订标题
- `zbookcontent`: 预订内容
- `zcontent`: 内容社区数据
- `zflights`: 航班历史数据
- `zsettings`: 设置选项

### 启动开发服务器
```bash
npm run dev
```

项目将在 `http://localhost:7004` 启动

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 📂 项目结构

```
src/
├── components/          # 可复用组件
│   ├── ZhangCCard.vue      # 内容卡片组件
│   ├── ZhangFooter.vue     # 底部导航组件
│   ├── ZhangTab.vue        # 标签页组件
│   └── ...
├── views/              # 页面组件
│   ├── ZhangIndex.vue      # 首页
│   ├── ZhangMine.vue       # 个人中心
│   ├── ZhangExp.vue        # 经验页面
│   └── ...
├── stores/             # Pinia状态管理
│   ├── counter.ts          # 计数器状态
│   └── searchHistory.ts   # 搜索历史状态
├── router/             # 路由配置
├── assets/             # 静态资源
│   ├── images/            # 图片资源
│   └── fonts/             # 字体资源
└── utils/              # 工具函数
```

## 🎨 主要页面

- `/` - 首页
- `/mine` - 个人中心  
- `/exp` - 经验分享
- `/itinerary` - 行程管理
- `/content-detail/:id` - 内容详情
- `/setting` - 设置页面

## 🔄 数据流

1. **静态数据**: 从 `zhangdb.json` 读取Mock数据
2. **状态管理**: 使用Pinia管理全局状态
3. **本地存储**: 搜索历史等数据持久化到localStorage

## 📱 移动端适配

项目主要针对移动端开发，包含：
- 响应式布局设计
- 触摸友好的交互体验
- 移动端性能优化

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

本项目仅供学习和展示使用。

---

**作者**: 张祈健  
**开发时间**: 2025年
