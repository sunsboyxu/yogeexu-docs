// 顶部导航
// navbar 说明文档：https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar
module.exports = {
  title: 'sunsboyxu',
  logo: {
    alt: 'sunsboyxu',
    src: 'logo.jpg',
    srcDark: 'logo.jpg',
    href: '/',
    target: '_self',
    width: 32,
    height: 32,
    className: 'custom-navbar-logo-class',
    style: { border: '1px solid #eee', borderRadius: '50%' },
  },
  style: 'dark',
  hideOnScroll: true,
  items: [
    {
      type: "doc",
      docId: "intro",
      position: "left",
      label: "前端文档",
    },
    { to: "/blog", label: "博客记录", position: "left" },
    { to: "/guitar", label: "吉他", position: "left" },
    { to: "/tea", label: "请你喝茶", position: "left" },
    {
      href: "https://github.com/sunsboyxu/yogeexu-docs",
      label: "GitHub",
      position: "right",
    },
    {
      type: 'search',
      position: 'right',
    },
  ],
}