// 顶部导航 navbar
// navbar 说明：https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar
// navbar.logo 说明： https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-logo
// navbar.items 说明: https://docusaurus.io/zh-CN/docs/api/themes/configuration#navbar-items

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
      className: 'navbar-icons navbar-icons-docs'
    },
    {
      to: "/blog",
      label: "博客记录",
      position: "left",
      className: 'navbar-icons navbar-icons-blog'
    },
    {
      to: "/guitar",
      label: "吉他爱好",
      position: "left",
      className: 'navbar-icons navbar-icons-guitar'
    },
    {
      to: "/tea",
      label: "一起喝茶",
      position: "left",
      className: 'navbar-icons navbar-icons-tea'
    },
    {
      position: 'right',
      href: 'https://github.com/sunsboyxu/yogeexu-docs',
      className: 'navbar-icons navbar-icons-github'
    },
    {
      type: 'search',
      position: 'right',
    },
  ]
}