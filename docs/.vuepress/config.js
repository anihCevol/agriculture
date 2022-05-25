module.exports = {
  theme:"reco",
  title: "前端项目文档",
  description: "记录工作，记录生活",
  base: "/agriculture/",
  themeConfig: {
    subSidebar:"auto",
    keyPage: {
      keys: ['6f63f96063a04ebc9c94d86b290a53a8'], // 1.3.0 版本后需要设置为密文
    },
    lastUpdated: "上次更新", // string | boolean
    nav: [
      { text: "首页", link: "/" },
      { text: "技术文档", link: "/blog/geoserver/g1" },
      { text: "开发工具", link: "/setting/utils/" },
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
      "/blog/": [
        {
          title: "geoserver",
          collapsable: false,
          children: [
            "/blog/geoserver/g1",
            "/blog/geoserver/g2",
            "/blog/geoserver/g3",
            "/blog/geoserver/g4",
            "/blog/geoserver/g5",
            "/blog/geoserver/g6",
          ],
        },
        {
          title: "QGIS",
          collapsable: false,
          children: [
            "/blog/QGIS/q1",
          ],
        },
      ],
      "/setting/utils": [
        {
          title: "基础",
          collapsable: false,
          children: [
            "/setting/utils/",
            "/setting/utils/nvm.md",
            "/setting/utils/eslint.md",
          ],
        },
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
