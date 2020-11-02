module.exports = {
  title: "零露的博客",
  description: "野有蔓草，零露瀼瀼。",
  theme: "@vuepress/theme-blog",
  smoothScroll: true,
  base: "/blog/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "零露的博客",
      description: "野有蔓草，零露瀼瀼。",
    },
  },
  themeConfig: {
    dateFormat: "YYYY-MM-DD",
    nav: [
      {
        text: "博客",
        link: "/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
    ],
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/shizuku",
        },
        {
          type: "mail",
          link: "mailto:2112165916@qq.com",
        },
        {
          type: "video",
          link: "https://www.bilibili.com/",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "https://opensource.org/licenses/MIT",
        },
      ],
    },
  },
  directories: [
    {
      id: "post",
      dirname: "_posts",
      path: "/",
    },
  ],
  globalPagination: {
    prevText: "上一页", // Text for previous links.
    nextText: "下一页", // Text for next links.
    lengthPerPage: "5", // Maximum number of posts per page.
    layout: "Pagination", // Layout for pagination page
  },
};
