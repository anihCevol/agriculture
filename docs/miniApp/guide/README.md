# 介绍

vue-uni-miniapp 基于 uni-app(cli)平台搭建，使用[uview-ui](https://www.uviewui.com/)作为 UI 框架，用于微信小程序和 H5移动端开发，模版集成相关开发插件，提供常用utils，快速，高效进行项目开发，统一页面风格

::: tip
设计相关技术框架
- [uniapp](https://uniapp.dcloud.io/)，跨平台开发框架，一套代码，可以生成H5,小程序代码
- [uview-ui](https://www.uviewui.com/) ，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具
- [luch-request](https://www.quanzhan.co/luch-request/handbook/) ，是一个基于Promise 开发的uni-app跨平台、项目级别的请求库，它有更小的体积，易用的api，方便简单的自定义能力。
:::


## 准备

安装 [node](https://nodejs.org/zh-cn/) node version>=10.x

安装 [yarn](https://yarn.bootcss.com/)，推荐使用 yarn 代替 npm

下载 [hbuilderx](https://www.dcloud.io/hbuilderx.html)，uni-app 开发工具，有较强的代码提示，推荐使用

安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，用于微信小程序开发

## 安装

```sh
# 克隆项目
git clone https://code.aliyun.com/burgeonSmartAgriculture/vue-uni-miniapp.git

# 进入项目目录
cd vue-uni-miniapp

# 安装依赖
yarn 或 yarn install

# 本地开发 启动项目(h5)
yarn serve
```

## 目录结构

```bash
├── dist                       # 构建相关
│   ├── dev                    # 运行环境
│   │   ├── mp-weixin          # 微信小程序
│   │   └── h5                 # h5
│   └── build                  # 构建环境
│   │   ├── mp-weixin
│   │   └── h5
├── public                     # 静态资源
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有api请求
│   ├── assets                 # 图片 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── config                 # 全局配置文件
│   ├── filters                # 全局 filter
│   ├── pages                  # views 所有页面
│   ├── serve                  # 请求封装
│   ├── static                 # 静态文件
│   ├── utils                  # 全局公用方法
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── manifest.json          # 各平台参数配置
│   ├── pages.json             # 页面配置
│   └── uni.scss               # uni-app内置的常用样式变量
├── babel.config.js            # babel-loader 配置
├── package.json               # package.json
├── postcss.config.js          # postcss 配置
└── vue.config.js              # vue-cli 配置
```

## 运行

uni-app 创建项目有两种模式：1. 通过 HBuilderX 可视化界面，2. 通过 vue-cli 命令行，[详情参考](https://uniapp.dcloud.io/quickstart-hx)，此模版使用 vue-cli 模式创建，项目运行方式[可参考](https://uniapp.dcloud.io/quickstart-cli?id=%e8%bf%90%e8%a1%8c%e3%80%81%e5%8f%91%e5%b8%83uni-app)

::: warning 思考
uni-app创建项目有两种方式，不同的创建方式就有不同的运行方式。建议开发人员阅读相关文档，清楚两种模式具体的区别，思考一下什么项目场景下使用vue-cli创建项目，什么场景使用开发工具创建项目
:::

使用hbuilderx 导入项目，在命令行运行：
``` sh
 # 运行H5环境
 yarn serve

 # 运行微信小程序环境
 yarn dev:mp-weixin

 # 运行支付宝小程序
 yarn dev:mp-alipay
```
或在hbuilderx工具栏点击:

<img :src="$withBase('/assets/img/dev.png')">

## 运行小程序

h5环境运行完成后在命令面板提供 http://localhost:8080/ 在浏览器中输入这个地址即可访问

微信小程序等小程序需要借助对应等开发工具运行，例如微信小程序：

当 yarn dev:mp-weixin 执行完成后，会在项目根目录创建 dist/dev/mp-wexin文件夹，这个就是编译好的本地小程序代码，使用微信开发者工具导入此文件

<img :src="$withBase('/assets/img/wexinexport.jpg')">

点击创建之后，如下显示就代表微信小程序运行成功

<img :src="$withBase('/assets/img/weixinSuccess.jpg')">

::: tip 建议
微信开发者工具和hbuilderx具体使用方法在这不做赘述，各位开发人员自行掌握
:::


















