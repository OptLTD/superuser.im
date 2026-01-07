---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SUPERUSER"
  text: "不只是多维表格，更是业务利器"
  tagline: "像搭积木一样，定制您的企业级解决方案"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 查看文档
      link: /guide/introduction
---

<FeatureCard
  title="告别繁琐配置"
  description="模块化设计，实现真正开箱即用。内置 TMS、CRM、工单系统等丰富模块，满足不同业务场景需求。"
>
  <template #icon>⚙️</template>
  <template #list>
    <ul class="feature-list">
      <li>内置 TMS、CRM、工单系统等丰富模块</li>
      <li>满足不同业务场景需求</li>
      <li>真正开箱即用，无需复杂配置</li>
    </ul>
  </template>
  <template #image>
    <img src="/table_index.jpeg" alt="模块化配置示例" />
  </template>
</FeatureCard>

<FeatureCard
  title="打破技术限制" :reverse="true"
  description="无代码核心，支持灵活自定义。让您无需编写代码即可完成复杂的业务配置。"
>
  <template #list>
    <ul class="feature-list">
      <li>支持修改字段、业务模型等</li>
      <li>支持配置插件、业务流程等</li>
      <li>支持配置权限、页面视图等</li>
    </ul>
  </template>
  <template #image>
    <img src="/table_pivot.jpeg" alt="自定义配置示例" />
  </template>
</FeatureCard>

<FeatureCard
  title="告别办公束缚"
  description="移动端友好，让您随时随地办公。任意模块都可以在移动端操作，并且交互友好操作便捷。"
>
  <template #list>
    <ul class="feature-list">
      <li>任意模块都可以在移动端操作，并且交互友好操作便捷</li>
      <li>支持移动端通知等，让办公协作更便捷</li>
      <li>完美适配各种移动设备</li>
    </ul>
  </template>
  <template #image>
    <img src="/table_index.jpeg" alt="移动端示例" />
  </template>
</FeatureCard>

<FeatureCard
  title="捍卫数据主权"
  description="多种部署方式，让数据存管无忧。无论您选择私有化部署还是云服务，都能保障数据安全。"
  :reverse="true"
>
  <template #list>
    <ul class="feature-list">
      <li>支持私有化部署，无忧数据隐私</li>
      <li>支持云服务，注册即可使用，方便便捷</li>
      <li>数据安全有保障，符合企业级标准</li>
    </ul>
  </template>
  <template #image>
    <img src="/table_pivot.jpeg" alt="部署方案示例" />
  </template>
</FeatureCard>

<FeatureCard
  title="探索 AI 效能"
  description="深度集成 AI 工具，让您工作更高效。让 AI 成为您工作中的得力助手。"
>
  <template #list>
    <ul class="feature-list">
      <li>支持 Streamable MCP，接入您的 AI 工具，让 AI 为您工作</li>
      <li>内置 AI 助手，无聊的工作交给 AI，我们干点有趣的事儿（即将推出）</li>
      <li>智能数据分析，快速获取洞察</li>
    </ul>
  </template>
  <template #image>
    <img src="/table_index.jpeg" alt="AI 功能示例" />
  </template>
</FeatureCard>

