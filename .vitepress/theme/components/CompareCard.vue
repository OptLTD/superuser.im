<script setup lang="ts">
interface ComparisonItem {
  feature: string
  excel: string
  feishu: string
  erp: string
  superuser: string
}

const props = defineProps<{
  title?: string
  items: ComparisonItem[]
}>()

const formatValue = (value: string) => {
  if (value === '✓' || value === '✗') {
    return value
  }
  return value
}

const getValueClass = (value: string) => {
  if (value === '✓') {
    return 'check'
  }
  if (value === '✗') {
    return 'cross'
  }
  return ''
}
</script>

<template>
  <div class="comparison-section">
    <h2 v-if="title" class="section-title">{{ title }}</h2>
    <table>
        <thead>
          <tr>
            <th class="feature-col">功能特性</th>
            <th>传统 Excel</th>
            <th>飞书多维表格</th>
            <th>传统 ERP</th>
            <th class="highlight-col">Superuser</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="feature-col">{{ item.feature }}</td>
            <td>
              <span v-if="getValueClass(item.excel)" :class="getValueClass(item.excel)">
                {{ formatValue(item.excel) }}
              </span>
              <span v-else>{{ item.excel }}</span>
            </td>
            <td>
              <span v-if="getValueClass(item.feishu)" :class="getValueClass(item.feishu)">
                {{ formatValue(item.feishu) }}
              </span>
              <span v-else>{{ item.feishu }}</span>
            </td>
            <td>
              <span v-if="getValueClass(item.erp)" :class="getValueClass(item.erp)">
                {{ formatValue(item.erp) }}
              </span>
              <span v-else>{{ item.erp }}</span>
            </td>
            <td class="highlight-col">
              <span v-if="getValueClass(item.superuser)" :class="getValueClass(item.superuser)">
                {{ formatValue(item.superuser) }}
              </span>
              <span v-else>{{ item.superuser }}</span>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<style scoped>
.comparison-section {
  margin: 6rem auto;
  max-width: 1400px;
  /* padding: 0 2rem; */
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 3rem;
  border-top: 0px solid var(--vp-c-divider);
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  display: table;
  /* border-radius: 12px; */
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  overflow: hidden;
}

thead {
  background: var(--vp-c-bg-soft);
}

th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  border-bottom: 2px solid var(--vp-c-divider);
}

th.feature-col {
  width: 20%;
  font-weight: 700;
}

th:not(.feature-col):not(.highlight-col) {
  width: 20%;
}

th.highlight-col {
  width: 20%;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  position: relative;
}

th.highlight-col::after {
  content: '推荐';
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 0.7rem;
  background: var(--vp-c-brand);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
}

td {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

td.feature-col {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

td.highlight-col {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.check {
  color: var(--vp-c-success-1, #10b981);
  font-weight: 700;
  font-size: 1.2rem;
}

.cross {
  color: var(--vp-c-danger-1, #ef4444);
  font-weight: 700;
  font-size: 1.2rem;
}

tbody tr:hover {
  background: var(--vp-c-bg-soft);
}

tbody tr:last-child td {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comparison-section {
    margin: 4rem auto;
    padding: 0 1rem;
    overflow-x: auto;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  table {
    min-width: 600px;
  }
  
  th, td {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
  
  th.highlight-col::after {
    display: none;
  }
}
</style>
