import { sidebar } from "vuepress-theme-hope";

export const cnSidebar = sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "快速开始",
      icon: "laptop-code",
      prefix: "startup/",
      link: "startup/",
      children: "structure",
    },
    {
      text: "使用指南",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "框架相关",
      icon: "book",
      prefix: "framework/",
      children: "structure",
    },
    {
      text: "功能模块",
      icon: "book",
      prefix: "ability/",
      children: [

        {
          text: "select",
          prefix: "select/",
          collapsible:true,
          children: "structure",
        },
        {
          text: "where",
          prefix: "where/",
          collapsible:true,
          children: "structure",
        },
        {
          text: "join",
          prefix: "join/",
          collapsible:true,
          children: "structure",
        },
        {
          text: "order-by",
          prefix: "order-by/",
          collapsible:true,
          children: "structure",
        },
        {
          text: "group-by",
          prefix: "group-by/",
          collapsible:true,
          children: "structure",
        },"insert","update","delete","transaction","insertOrUpdate","batch","dynamic-table-name","reuse","native-sql"
      ],
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
