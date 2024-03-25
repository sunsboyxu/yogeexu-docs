import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

import navbarConfig from './configs/navbar'
import algoliaConfig from './configs/algolia'

const config: Config = {
  title: '前端技术 Docs', // 网站首页标题
  tagline: '前端工程师，不断记录才会让技术得到提升！！！', // 网站首页副标题
  favicon: 'favicon.ico',
  url: 'https://sunsboyxu.github.io',
  baseUrl: '/yogeexu-docs/', // 基础路径
  organizationName: 'sunsboyxu',
  projectName: 'yogeexu-docs',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './configs/sidebars.ts',
          routeBasePath: '/'
        },
        blog: {
          path: 'blog',
          editLocalizedFiles: false,
          blogTitle: '博客标题',
          blogDescription: '博客',
          blogSidebarCount: 5,
          blogSidebarTitle: 'sunsboyxu的博客',
          routeBasePath: 'blog'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    image: 'img/docusaurus.png',
    defaultMode: 'light', // light | dark
    disableSwitch: false,
    respectPrefersColorScheme: false,
    metadata: [{ name: 'keywords', content: 'docusaurus3 文档，前端文档，vue文档，vue3文档，' }],
    navbar: navbarConfig,
    algolia: algoliaConfig,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    footer: {}
  } satisfies Preset.ThemeConfig
}

export default config
