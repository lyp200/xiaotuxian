//GITimport "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//引入初始化样式文件
import "@/styles/common.scss";
import { useIntersectionObserver } from "@vueuse/core";

// //  接口函数
// import { getCategory } from "@/apis/testAPI";
// getCategory().then((res) => {
//   console.log(res);
// });

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

//定义全局指令      //el：指令绑定的那个元素 img
//binding:binding.value 指令等于号后面绑定的表达式的值 图片URL
app.directive(
  "img-lazy", // 定义了一个全局自定义指令img-lazy。指令的作用是实现图片的懒加载效果。
  {
    mounted(el, binding) {
      //在mounted钩子函数中，当图片出现在可视区域内时再加载图片。
      console.log(el, binding.value);
      // el参数表示指令绑定的元素，这里是img元素。binding参数是一个对象，其中的value属性表示指令等号后面绑定的表达式的值，即图片的URL
      // 总结起来，这段代码定义了一个全局自定义指令img-lazy，在指令的mounted钩子函数中可以编写代码来实现图片的懒加载效果。
      useIntersectionObserver(el, ([{ isIntersecting }]) => {
        console.log(isIntersecting); //通过console.log打印出isIntersecting的值，即目标元素是否进入了视窗。
        if (isIntersecting) {
          //进入视图区域
          el.src = binding.value;
        }
      });
    },
  }
);
