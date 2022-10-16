/**
 * 预设
 * 使用侧边栏，只需两步
 *  定义一个导出一组侧边栏对象的文件
 *  直接将这个对象传入 @docusaurus/plugin-docs，或者通过 @docusaurus/preset-classic 传入
*/
module.exports = [
  [
    "@docusaurus/preset-classic",
    ({
      docs: {
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
      blog: {
        path: 'blog',
        // 一般使用场景：字符串 editUrl
        // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // 高级使用场景：函数 editUrl
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) => `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
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
    }),
  ],
]