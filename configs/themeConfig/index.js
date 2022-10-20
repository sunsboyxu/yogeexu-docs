// themeConfig 主题配置
// https://docusaurus.io/zh-CN/docs/api/themes/configuration

// const footer = require('./footer')

const colorMode = require('./colorMode')
const navbar = require('./navbar')
const prism = require('./prism')
const algolia = require('./algolia')

module.exports = {
  image: 'img/docusaurus.png',
  metadata: [{ name: 'twitter:card', content: 'summary' }],
  colorMode,
  navbar,
  prism,
  algolia,
  footer: {},
  // announcementBar: {
  //   id: 'top-tips',
  //   content: '我们正打算翻新文档，请填写<a target="_blank" rel="noopener noreferrer" href="#">这个调查</a>',
  //   backgroundColor: '#fafbfc',
  //   textColor: '#091E42',
  //   isCloseable: true,
  // }
}