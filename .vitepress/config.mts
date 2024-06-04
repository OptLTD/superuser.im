import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SUPERUSER",
  description: "Data is valuable, check it now.",
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh-CN/index',
    },
    en: {
      label: 'English',
      link: '/en-US/index',
      lang: 'en-US', 
    },
    fr: {
      label: 'French',
      lang: 'fr-FR', 
      link: '/fr-FR/index',
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Price', link: '/price' }
    ],

    sidebar: [
      {
        text: 'Examples1',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples2',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/superuserim' },
      { icon: 'x', link: 'https://github.com/im_super_user' },
    ],
  }
})
