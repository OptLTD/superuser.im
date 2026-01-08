---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SUPERUSER"
  text: "不只是多维表格，更是业务利器"
  tagline: "就像搭积木一样简单，定制您的专属解决方案"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 查看文档
      link: /guide/introduction

features:
  - title: 开箱即用，即刻提效
    details: 采用独特的模块化设计，彻底告别繁琐的初始配置。您所需的TMS、CRM、工单系统等核心功能，均已就绪，助您业务迅速上线。
  - title: 灵活定制，无需代码
    details: 强大的无代码核心，让业务人员也能轻松调整字段、模型、流程、权限与界面。您的业务如何变化，平台就能如何随需而变。
  - title: 全端协同，移动办公
    details: 提供真正移动端友好的体验，所有模块操作流畅便捷。结合实时通知，让团队协作突破时空束缚，随时随地高效推进。
  - title: 部署自由，数据无忧
    details: 提供私有化与云端两种部署方案。既保障核心数据的安全与主权，也支持快速注册的云服务，满足不同企业的合规与敏捷需求。
  # - title: AI赋能，智领未来
  #   details: 深度集成AI能力。不仅支持通过Streamable MCP接入您喜爱的AI工具，更内置AI助手，将重复性工作自动化，释放团队创造力，聚焦高价值战略。
---

<CompareCard title="为什么选择 Superuser？" :items="[
    {feature: '无代码配置', excel: '✗', feishu: '部分支持', erp: '✗', superuser: '✓'},
    {feature: '模块化设计', excel: '✗', feishu: '✗', erp: '部分支持', superuser: '✓'},
    {feature: '移动端支持', excel: '✗', feishu: '✓', erp: '部分支持', superuser: '✓'},
    {feature: '私有化部署', excel: '✗', feishu: '✗', erp: '✓', superuser: '✓'},
    {feature: '业务场景适配', excel: '✗', feishu: '基础支持', erp: '需要定制', superuser: '✓'},
    {feature: 'AI 集成能力', excel: '✗', feishu: '✗', erp: '✗', superuser: '✓'},
    {feature: '学习成本', excel: '低', feishu: '中', erp: '高', superuser: '低'},
    {feature: '定制灵活性', excel: '低', feishu: '中', erp: '高（需开发）', superuser: '高（无代码）'}
  ]"
/>

<FinalCTA 
  title="准备开始了吗？"
  subtitle="立即体验 Superuser，开启您的业务数字化之旅"
  primary-text="免费开始"
  primary-link="/guide/quick-start"
  secondary-text="查看文档"
  secondary-link="/guide/introduction"
/>