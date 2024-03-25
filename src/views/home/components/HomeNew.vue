<script setup>
import HomePanel from "./HomePanel.vue";
import { findNewAPI } from "@/apis/home";
import { onMounted, ref } from "vue";

//获取数据封装接口
const newList = ref([]); //这段代码使用了Vue 3中的ref函数来创建一个响应式的变量newList，它的初始值是一个空数组[]
const getNewList = async () => {
  const res = await findNewAPI(); //定义了一个异步函数getNewList，它会调用findNewAPI函数来获取数据，并将获取到的结果赋值给newList.value。
  newList.value = res.result;
};
onMounted(() => getNewList()); //获取数据这段代码的作用是在组件挂载完成后，通过调用findNewAPI函数来获取新的数据，
//并将数据赋值给newList.value。由于newList是响应式的，所以当newList.value发生变化时，相关的视图会自动更新。
</script>

<template>
  <HomePanel title="新鲜好物" sub-title="新鲜好物 品质靠谱">
    <!-- 下面是插槽主体内容模版 -->
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <!-- 在li元素内部，使用了RouterLink组件来实现路由跳转。to属性指定了跳转的目标路由为"/"。 -->
          <img alt="" :src="item.picture" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>

  <!-- 下面是插槽主体内容模版
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
  -->
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
