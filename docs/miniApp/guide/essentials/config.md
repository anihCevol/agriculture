# config

## apiconfig.js

```js
/**
 * ApiUrl 后台接口域名
 * ossUrl oss文件域名
 */
let apiConfig = {
  dev: {
    ApiUrl: '',
    ossUrl: ''
  },
  test: {
    ApiUrl: '',
    ossUrl: ''
  },
  prod: {
    ApiUrl: '',
    ossUrl: ''
  }
}
export default apiConfig

```
apiconfig.js 配置不同环境（开发，测试，生产）下所使用的数据，如果接口地址，oss地址等，如有不同环境使用不同值的数据均可配置这里

## index.js

```js
import apiConfig from "./apiConfig";
const { ApiUrl, ossUrl } = apiConfig[
  process.env.VUE_APP_ENV
    ? process.env.VUE_APP_ENV
    : process.env.NODE_ENV === "production"
    ? "prod"
    : "dev"
];

const ossImagePath = {
  commodity: "commodity/images", // 商品图片
};

export { ApiUrl, ossUrl, ossImagePath };

```
index文件导出对应的环境的数据，一些公用的配置也在这里配置，如ossImgPath。