(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{363:function(t,s,n){"use strict";n.r(s);var e=n(45),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("p",[t._v("vue-uni-miniapp 基于 uni-app(cli)平台搭建，使用"),n("a",{attrs:{href:"https://www.uviewui.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uview-ui"),n("OutboundLink")],1),t._v("作为 UI 框架，用于微信小程序和 H5移动端开发，模版集成相关开发插件，提供常用utils，快速，高效进行项目开发，统一页面风格")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("设计相关技术框架")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://uniapp.dcloud.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniapp"),n("OutboundLink")],1),t._v("，跨平台开发框架，一套代码，可以生成H5,小程序代码")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.uviewui.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("uview-ui"),n("OutboundLink")],1),t._v(" ，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.quanzhan.co/luch-request/handbook/",target:"_blank",rel:"noopener noreferrer"}},[t._v("luch-request"),n("OutboundLink")],1),t._v(" ，是一个基于Promise 开发的uni-app跨平台、项目级别的请求库，它有更小的体积，易用的api，方便简单的自定义能力。")])])]),t._v(" "),n("h2",{attrs:{id:"准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),n("p",[t._v("安装 "),n("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node"),n("OutboundLink")],1),t._v(" node version>=10.x")]),t._v(" "),n("p",[t._v("安装 "),n("a",{attrs:{href:"https://yarn.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn"),n("OutboundLink")],1),t._v("，推荐使用 yarn 代替 npm")]),t._v(" "),n("p",[t._v("下载 "),n("a",{attrs:{href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hbuilderx"),n("OutboundLink")],1),t._v("，uni-app 开发工具，有较强的代码提示，推荐使用")]),t._v(" "),n("p",[t._v("安装 "),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开发者工具"),n("OutboundLink")],1),t._v("，用于微信小程序开发")]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://code.aliyun.com/burgeonSmartAgriculture/vue-uni-miniapp.git\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入项目目录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" vue-uni-miniapp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" 或 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地开发 启动项目(h5)")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" serve\n")])])]),n("h2",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("├── dist                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建相关")]),t._v("\n│   ├── dev                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行环境")]),t._v("\n│   │   ├── mp-weixin          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 微信小程序")]),t._v("\n│   │   └── h5                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# h5")]),t._v("\n│   └── build                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建环境")]),t._v("\n│   │   ├── mp-weixin\n│   │   └── h5\n├── public                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源")]),t._v("\n│   └── index.html             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# html模板")]),t._v("\n├── src                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 源代码")]),t._v("\n│   ├── api                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有api请求")]),t._v("\n│   ├── assets                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 图片 字体等静态资源")]),t._v("\n│   ├── components             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局公用组件")]),t._v("\n│   ├── config                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置文件")]),t._v("\n│   ├── filters                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局 filter")]),t._v("\n│   ├── pages                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# views 所有页面")]),t._v("\n│   ├── serve                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求封装")]),t._v("\n│   ├── static                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态文件")]),t._v("\n│   ├── utils                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局公用方法")]),t._v("\n│   ├── App.vue                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口页面")]),t._v("\n│   ├── main.js                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件 加载组件 初始化等")]),t._v("\n│   ├── manifest.json          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 各平台参数配置")]),t._v("\n│   ├── pages.json             "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面配置")]),t._v("\n│   └── uni.scss               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# uni-app内置的常用样式变量")]),t._v("\n├── babel.config.js            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# babel-loader 配置")]),t._v("\n├── package.json               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# package.json")]),t._v("\n├── postcss.config.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# postcss 配置")]),t._v("\n└── vue.config.js              "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vue-cli 配置")]),t._v("\n")])])]),n("h2",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),n("p",[t._v("uni-app 创建项目有两种模式：1. 通过 HBuilderX 可视化界面，2. 通过 vue-cli 命令行，"),n("a",{attrs:{href:"https://uniapp.dcloud.io/quickstart-hx",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情参考"),n("OutboundLink")],1),t._v("，此模版使用 vue-cli 模式创建，项目运行方式"),n("a",{attrs:{href:"https://uniapp.dcloud.io/quickstart-cli?id=%e8%bf%90%e8%a1%8c%e3%80%81%e5%8f%91%e5%b8%83uni-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("可参考"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("思考")]),t._v(" "),n("p",[t._v("uni-app创建项目有两种方式，不同的创建方式就有不同的运行方式。建议开发人员阅读相关文档，清楚两种模式具体的区别，思考一下什么项目场景下使用vue-cli创建项目，什么场景使用开发工具创建项目")])]),t._v(" "),n("p",[t._v("使用hbuilderx 导入项目，在命令行运行：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行H5环境")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" serve\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行微信小程序环境")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev:mp-weixin\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行支付宝小程序")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" dev:mp-alipay\n")])])]),n("p",[t._v("或在hbuilderx工具栏点击:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/assets/img/dev.png")}}),t._v(" "),n("h2",{attrs:{id:"运行小程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行小程序"}},[t._v("#")]),t._v(" 运行小程序")]),t._v(" "),n("p",[t._v("h5环境运行完成后在命令面板提供 http://localhost:8080/ 在浏览器中输入这个地址即可访问")]),t._v(" "),n("p",[t._v("微信小程序等小程序需要借助对应等开发工具运行，例如微信小程序：")]),t._v(" "),n("p",[t._v("当 yarn dev:mp-weixin 执行完成后，会在项目根目录创建 dist/dev/mp-wexin文件夹，这个就是编译好的本地小程序代码，使用微信开发者工具导入此文件")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/assets/img/wexinexport.jpg")}}),t._v(" "),n("p",[t._v("点击创建之后，如下显示就代表微信小程序运行成功")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/assets/img/weixinSuccess.jpg")}}),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),n("p",[t._v("微信开发者工具和hbuilderx具体使用方法在这不做赘述，各位开发人员自行掌握")])])])}),[],!1,null,null,null);s.default=a.exports}}]);