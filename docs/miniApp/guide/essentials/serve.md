# 和服务端交互

## 请求 api 流程

在 vue-uni-miniapp 中，前端获取服务器数据流程有以下流程：

1.UI 页面交互操作 </br> 2.调统一管理等 api 请求函数</br> 3.使用封装的 serve 进行发送请求</br> 4.获取后台数据并返回 data

## api 统一管理

值得留意的是 api 的统一管理，所有的接口请求地址，都放在 api 下进行管理，以防后端同学提出更换 api 接口地址的需求，api 目录如下：

```sh
api
  modules
    index.js
    login.js
    users.js
  index.js
```

在 <code>modules/index.js </code>文件中，require.context 获取并导出 modules 下所有的 api：

```sh
const files = require.context('.', false, /\.js$/)
const modules = []
files.keys().forEach(key => {
  if (key === './index.js') return
  const item = files(key).default
  modules.push(item)
})
export default modules

```

<code>api/index.js</code>，接收所有 api 并导出为对象：

```sh
import modules from './modules'
const Api = {}
modules.map(m => {
  Object.assign(Api, m)
})
export default Api

```

之后就是在 main.js 中引入 <code>api/index.js</code>，并注册\$axios 挂载到 Vue 下

```sh
import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import Api from '@/api'
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$axios = Api
const app = new Vue({
  ...App
})
app.$mount()
```

api 目录如此设计的出发点主要是集中管理后台接口请求，即使后端接口变更只要在此文件做修改即可。还有一方面原因就是多人开发问题，如果所有接口地址都放在 api/index.js 中，在多人开发过程中，最频繁修改的文件之一就是 api/index.js，这样就存在一个问题，在合并代码的时候就会出现代码冲突，而且是改一次，冲突一次。每个人书写都顺序还不一致。如果把文件拆分到每个业务模块（这个根据项目需求自行判定），开发同学在相关的业务模块下进行 api 的增删改，这样就会降低代码冲突的概率，而且拆分到模块更便于维护。

## 请求的封装

<code>serve/index.js</code> 基于 [luch-request](https://www.quanzhan.co/luch-request/handbook/) 的封装，统一管理 POST，GET，等请求参数，请求头，以及其他业务参数,具体参看 [serve/index.js](https://code.aliyun.com/burgeonSmartAgriculture/vue-uni-miniapp/blob/master/src/serve/index.js)。它封装了全局 <code>request 拦截器</code>、<code>response 拦截器</code>、<code>统一的错误处理</code>、<code>请求参数格式</code>等

## 一个请求用户信息的例子

```js
// 在api/moudels 目录下创建 user.js 文件
import { GET } from "@/config/index"
// 获取用户信息
const getUserInfo = GET(`/gateway/api/backapp/user/`)
export default {
  getUserInfo: getUserInfo
}

// user.vue
export default {
  data() {
    userInfo: null;
  },
  methods: {
    // 获取用户信息
    async userInfo() {
      try(){
        // 请求成功的处理
       this.suerInfo = await this.$axios.getUserInfo()
      }catch(err){
        // 请求错误
      }
    }
  }
}
```
