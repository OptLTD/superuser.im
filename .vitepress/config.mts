import { defineConfig } from 'vitepress'

import { shared } from './shared'
import { en } from './en'
import { zh } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  title: "SUPERUSER",
  description: "Data is valuable, check it now.",
  locales: {
    en: { label: 'English', ...en },
    root: { label: '简体中文', ...zh },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Price', link: '/price' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples1',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'Examples2',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/superuserim' },
      { icon: 'x', link: 'https://x.com/im_super_user' },
    ],
  }
})
