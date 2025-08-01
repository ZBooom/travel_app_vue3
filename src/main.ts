import "./assets/main.css";
import "./assets/fonts/iconfont/iconfont.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { provide } from "vue";
import "animate.css";
import axios from "axios";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
// app.use(axios)
// app.use(createPinia())
app.use(router);
app.use(Vant);
// provide一个只读的变量，名称为name，值为Zhangqijian
app.provide("name", "Zhangqijian");
app.provide("$axios", axios);
// baseurl为http://localhost:3000/zproducts
axios.defaults.baseURL = "http://localhost:3000/";

app.mount("#app");
