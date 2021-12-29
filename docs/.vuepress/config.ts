import { defineUserConfig, ViteBundlerOptions } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import Meta from '../../package.json'
import * as path from 'path'

const name = Meta.name.charAt(0).toUpperCase() + Meta.name.slice(1)

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  // site config
  lang: 'en-US',
  title: name,
  description: Meta.description,

  head: [
    ['meta', { property: 'og:title', content: name }],
    [
      'meta',
      {
        property: 'og:description',
        content: Meta.description,
      },
    ],
    ['meta', { property: 'og:url', content: Meta.homepage }],
    [
      'meta',
      {
        property: 'og:image',
        content: `${Meta.homepage}/logo.png`,
      },
    ],
    ['meta', { name: 'twitter:title', content: name }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: Meta.description,
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: `${Meta.homepage}/logo.png`,
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.svg',
    repo: Meta.repository.replace('github:', ''),
    docsBranch: 'master',
    docsDir: 'docs',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
  },

  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      configFile: 'docs/vite.config.ts',
    },
  },

  plugins: [
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
})
