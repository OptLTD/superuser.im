---
# https://vitepress.dev/reference/default-theme-home-page
layout: page
aside: false
sidebar: false
---

<PricingCard  title="选择适合您的方案" :items="[
    {
      title: '基础版',
      price: '免费',
      period: '',
      description: '适合个人用户和小团队',
      features: ['基础模块使用', '社区支持', '基础功能配置'],
      actionText: '立即开始',
      actionLink: '/guide/quick-start'
    },
    {
      title: '专业版',
      price: '¥299',
      period: '/月',
      description: '适合中小企业',
      featured: true,
      features: ['所有模块功能', '优先技术支持', '高级功能配置', '私有化部署'],
      actionText: '联系销售',
      actionLink: '/guide/quick-start'
    },
    {
      title: '企业版',
      price: '定制',
      period: '',
      description: '适合大型企业',
      features: ['专属定制开发', '7x24小时支持', '专属部署方案', '培训与咨询'],
      actionText: '联系销售',
      actionLink: '/guide/quick-start'
    }
  ]"
/>

