// docusaurus 配置
// https://docusaurus.io/zh-CN/docs/api/docusaurus-config

const themeConfig = require('./configs/themeConfig')
const presets = require('./configs/presets')

module.exports = {
  title: '前端技术 Docs', // 网站首页标题
  tagline: '前端工程师，不断记录才会让技术得到提升！！！', // 网站首页副标题
  url: 'https://sunsboyxu.github.io',
  baseUrl: '/yogeexu-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: "warn",
  favicon: 'favicon.ico',
  staticDirectories: ['static'],
  organizationName: 'sunsboyxu',
  projectName: 'yogeexu-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-Hans', // en | zh-Hans
    locales: ['zh-Hans'], // ['en', 'zh-Hans']
  },
  presets,
  themeConfig,
  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/@docsearch/css@3'
  }],
  scripts: [{
    src: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3'
  }]
}
