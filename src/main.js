//GITimport "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//引入初始化样式文件
import "@/styles/common.scss";
//引入懒加载插件并且注册
import { LazyPlugin } from "@/directives";

// //  接口函数
// import { getCategory } from "@/apis/testAPI";
// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(LazyPlugin); //注册懒加载
app.mount("#app");
