import httpInstance from "@/utils/http";
//封装获取banner、、轮播图
export function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
  });
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */

export const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};
//这段代码导出了一个名为findNewAPI的函数。该函数使用了一个名为httpInstance的变量来发起HTTP请求，请求地址为/home/new。

//在这里，httpInstance可能是一个封装了HTTP请求的工具函数或者是一个Axios实例。根据代码的上下文来看，它被用于发送请求并返回一个Promise对象。

//当调用findNewAPI函数时，它会发送一个GET请求到/home/new接口，并返回一个Promise对象。通过这个Promise对象，可以在调用方使用.then()或者await来获取请求的结果。

//这段代码的作用是封装了一个获取新数据的API请求函数，可以在其他地方导入并使用它来获取新数据
