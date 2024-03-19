import httpInstance from "@/utils/http";
//封装获取banner、、轮播图
export function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
  });
}
