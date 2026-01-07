import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'SuperUser',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  rewrites: {
    'zh-CN/:rest*': ':rest*'
  },

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://superuser.im',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en-US' }],
    ['meta', { property: 'og:site_name', content: 'SuperUser' }],
    ['meta', { property: 'og:title', content: 'SuperUser | Module Data Management Platform' }],
    ['meta', { property: 'og:image', content: 'https://superuser.im/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://superuser.im/' }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: {
      src: '/logo.svg',
      width: 36, height: 36,
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/OptLTD/superuser.im'
      },
    ],
  }
})