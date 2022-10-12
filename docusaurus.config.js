const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

const navbar = require('./configs/navbar')
const footer = require('./configs/footer')
const presets = require('./configs/presets')

const config = {
  title: "前端技术 Docs", // 网站首页标题
  tagline: "前端工程师，不断记录才会让技术得到提升！！！",  // 网站首页副标题
  url: "https://sunsboyxu.github.io",
  baseUrl: "/yogeexu-docs/",
  onBrokenLinks: "throw",
  // onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  staticDirectories: ['static'],
  organizationName: "sunsboyxu",
  projectName: "yogeexu-docs",
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: { // 国际化 en zh-Hans
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  // 预设配置
  presets,
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 顶部导航
      navbar,
      // 底部导航
      // footer,
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'https://docusaurus.io/zh-CN/assets/images/social-card-8dc2413b4f9e86328bf77575e91171d7.png',
      metadata: [{ name: 'twitter:card', content: 'summary' }],
      announcementBar: {
        id: 'support_us',
        content:
          '我们正打算翻新文档，请填写<a target="_blank" rel="noopener noreferrer" href="#">这个调查</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      }
    })
}

module.exports = config
