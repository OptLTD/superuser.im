<template>
  <div ref="containerRef" class="hero-image-container">
    <!-- Tabs 区域 -->
    <div class="tabs-wrapper">
      <!-- 视图类型 Tabs -->
      <div class="tabs-group">
        <button
          v-for="view in views" :key="view.value"
          :class="['tab-button', getClazz(view.value)]"
          @click="setActiveTab(view.value)"
        >
          {{ view.label }}
        </button>
      </div>
      
      <!-- 分隔符 -->
      <div class="tabs-divider">|</div>
      
      <!-- 系统类型 Tabs -->
      <div class="tabs-group">
        <button
          v-for="system in systems" :key="system.value"
          :class="['tab-button', getClazz(system.value)]"
          @click="setActiveTab(system.value)"
        >
          {{ system.label }}
        </button>
      </div>
    </div>
    
    <!-- 图片区域 -->
    <div class="image-wrapper">
      <img 
        :src="currentImage" 
        :alt="`${activeView}`"
        class="hero-image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 视图类型
const views = [
  { label: '表格视图', value: 'table-index' },
  { label: '汇总视图', value: 'table-totals' },
  { label: '透视视图', value: 'table-pivot' },
  { label: '详情视图', value: 'table-detail' }
]

// 系统类型
const systems = [
  { label: 'TMS', value: 'bundle-tms' },
  { label: 'CRM', value: 'bundle-crm' },
  { label: '工单系统', value: 'bundle-ticket' },
  { label: '财务系统', value: 'bundle-finance' }
]

// 当前选中的 tab（统一焦点）
const activeTab = ref('table-index')

// 容器引用
const containerRef = ref(null)

// 设置激活的 tab 并滚动到容器
const setActiveTab = ( value) => {
  activeTab.value = value
  // 滚动到容器区域
  scrollToContainer()
}

// 滚动到容器区域
const scrollToContainer = () => {
  if (!containerRef.value) return
  
  const navHeight = 64 // VitePress 导航栏高度
  const rect = containerRef.value.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const targetY = scrollTop + rect.top - navHeight - 20
  
  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  })
}

// 图片映射表（可以根据实际情况添加更多图片）
// 格式：'视图-系统': '图片路径'
const imageMap = {
  // 按类型
  'table-index': '/table_index.jpeg',
  'table-totals': '/table_totals.jpeg',
  'table-detail': '/table_detail.jpeg',
  'table-pivot': '/table_pivot.jpeg',
  'table-list': '/table_index.jpeg',

  // 按系统
  'bundle-tms': '/bundle_tms.jpeg',
  'bundle-crm': '/bundle_crm.jpeg',
  'bundle-ticket': '/bundle_ticket.jpeg',
  'bundle-finance': '/bundle_finance.jpeg',

  // 默认图片
  'default': '/table_index.jpeg'
}

// 计算当前显示的图片
const currentImage = computed(() => {
  const key = `${activeTab.value}`
  return imageMap[key] || imageMap['default']
})

const getClazz = (value) => {
  return activeTab.value === value ? 'active' : ''
}
</script>

<style scoped>
.hero-image-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

.tabs-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  margin: -1rem;
  transition: all 0.3s ease;
}


.tabs-group {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.tabs-divider {
  color: var(--vp-c-text-3);
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0 0.5rem;
  user-select: none;
}

.tab-button {
  font-weight: 500;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-button:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-soft);
}

.tab-button.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-2);
  font-weight: 600;
}

.image-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hero-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .tabs-wrapper {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .tabs-divider {
    display: none;
  }
  
  .tabs-group {
    gap: 0.5rem;
  }
  
  .tab-button {
    padding: 5px 10px;
    font-size: 13px;
  }
  
  .hero-image-container {
    gap: 1rem;
  }
}
</style>