/**
 * 预设
 * 
 * 下面的 'classic', 相当于 '@docusaurus/preset-classic' 这插件
 * 
 * docs 使用的是 '@docusaurus/plugin-content-docs'
 * docs 配置说明：https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#configuration
 * 
 * blog 使用的是 '@docusaurus/plugin-content-blog'
 * blog 配置说明：https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog#configuration
 * 
 * 如果已经安装了 @docusaurus/preset-classic 插件，
 * 则不需要 '@docusaurus/plugin-content-docs' 和 '@docusaurus/plugin-content-blog'
 * 
 * 在 预设中 配置 docs 和 blog 即可
 * 
 *  
*/

module.exports = [
  [
    "classic", ({
      docs: {
        sidebarPath: require.resolve("./sidebars.js"),
        routeBasePath: '/'
      },
      blog: {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: '博客标题',
        blogDescription: '博客',
        blogSidebarCount: 5,
        blogSidebarTitle: 'sunsboyxu的博客',
        routeBasePath: 'blog',
        include: ['**/*.{md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        postsPerPage: 10,
        blogListComponent: '@theme/BlogListPage',
        blogPostComponent: '@theme/BlogPostPage',
        blogTagsListComponent: '@theme/BlogTagsListPage',
        blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        feedOptions: {
          type: 'all',
          title: 'sunsboyxu的博客',
          description: 'sunsboyxu的博客',
          copyright: 'sunsboyxu',
          language: undefined,
        },
      },
      theme: {
        customCss: require.resolve("../src/css/custom.css"),
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    }),
  ]
]