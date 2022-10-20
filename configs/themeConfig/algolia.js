// 搜索功能
// 搜索功能说明： https://docusaurus.io/zh-CN/docs/search#using-algolia-docsearch

module.exports = {
  appId: 'YOUR_APP_ID', // Algolia 提供的应用 ID
  apiKey: 'YOUR_SEARCH_API_KEY', //  公开 API 密钥：提交它没有危险
  indexName: 'YOUR_INDEX_NAME',
  contextualSearch: true, // 可选：见下文
  // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 
  // 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
  externalUrlRegex: 'external\\.com|domain\\.com',
  // 可选：Algolia 搜索参数
  searchParameters: {},
  // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
  searchPagePath: 'search',
}