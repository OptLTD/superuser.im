import { defineConfig } from 'vitepress'

import { shared } from './shared'
import { enUS } from './en-US'
import { zhCN } from './zh-CN'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  title: "SUPERUSER",
  description: "Data is valuable, check it now.",
  locales: {
    'root': { label: '简体中文', ...zhCN },
    'en-US': { label: 'English', ...enUS },
  },
})
