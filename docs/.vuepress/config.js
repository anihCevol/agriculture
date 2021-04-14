module.exports = {
  title: "前端项目文档",
  description: "前端项目文档",
  base: "/agriculture/",
  themeConfig: {
    lastUpdated: "上次更新", // string | boolean
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/setting/project/" },
      {
        text: "模版",
        items: [
          { text: "vue-uni-miniapp", link: "/miniApp/guide/" },
          { text: "vue-element-admin", link: "/miniApp/admin/" },
        ],
      },
      {
        text: "项目记录",
        items: [
          { text: "好粮有网一期", link: "/projects/haoliangyouwang" },
          { text: "榆阳", link: "/projects/yuyang" },
        ],
      },
      { text: "库", link: "/plugins/" },
    ],
    sidebar: {
      "/setting/project": [
        {
          title: "基础",
          collapsable: false,
          children: [
            "/setting/project/",
            "/setting/project/nvm.md",
            "/setting/project/eslint.md"
          ]
        }
      ],
      "/miniApp/guide/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            "/miniApp/guide/",
            "/miniApp/guide/essentials/newPage.md",
            "/miniApp/guide/essentials/serve.md",
            "/miniApp/guide/essentials/config.md",
          ],
        },
        {
          title: "进阶",
          collapsable: false,
          children: [
            "/miniApp/guide/advanced/compoent.md",
            "/miniApp/guide/advanced/import.md",
            "/miniApp/guide/advanced/deploy.md",
          ],
        },
      ],
      "/plugins/": [
        {
          title: "插件",
          collapsable: false,
          children: ["/plugins/"],
        },
      ],
      "/projects/": [
        {
          title: "项目历史",
          collapsable: false,
          children: ["/projects/haoliangyouwang.md", "/projects/yuyang.md"],
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": "/public/assets",
      },
    },
  },
};
