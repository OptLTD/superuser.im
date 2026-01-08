<script setup lang="ts">
interface PricingItem {
  title: string
  price: string
  period?: string
  description?: string
  featured?: boolean
  features?: string[]
  actionText?: string
  actionLink?: string
}

defineProps<{
  title?: string
  items: PricingItem[]
}>()
</script>

<template>
  <div class="pricing-section">
    <h2 v-if="title" class="pricing-title">
      {{ title }}
    </h2>
    <div class="pricing-cards">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        :class="['pricing-card', { featured: item.featured }]"
      >
        <div class="pricing-header">
          <h3 class="title">{{ item.title }}</h3>
          <div class="price">
            <span class="amount">{{ item.price }}</span>
            <span v-if="item.period" class="period">{{ item.period }}</span>
          </div>
          <p v-if="item.description" class="description">{{ item.description }}</p>
        </div>
        <div class="pricing-content">
          <ul v-if="item.features" style="list-style: none; padding: 0; margin: 0;">
            <li v-for="(feature, idx) in item.features" :key="idx" style="padding: 0.5rem 0; color: var(--vp-c-text-2);">
              ✓ {{ feature }}
            </li>
          </ul>
        </div>
        <div class="pricing-footer">
          <a 
            v-if="item.actionLink && item.actionText"
            :href="item.actionLink" 
            style="display: block; text-align: center; padding: 0.75rem 1.5rem; background: var(--vp-c-brand); color: white; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 1rem;"
          >
            {{ item.actionText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-section {
  margin: 6rem auto;
  max-width: 1400px;
  padding: 0 2rem;
}

.pricing-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 3rem;
}

.pricing-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.pricing-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--vp-shadow-4);
  border-color: var(--vp-c-brand);
}

.pricing-card.featured {
  border-color: var(--vp-c-brand);
  border-width: 2px;
  background: var(--vp-c-bg-soft);
}

.pricing-card.featured::before {
  content: '推荐';
  position: absolute;
  top: -12px;
  right: 24px;
  background: var(--vp-c-brand);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.pricing-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.amount {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-brand);
  line-height: 1;
}

.period {
  font-size: 1rem;
  color: var(--vp-c-text-2);
}

.description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.pricing-content {
  flex: 1;
  margin-bottom: 1.5rem;
}

.pricing-footer {
  margin-top: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .pricing-section {
    margin: 4rem auto;
    padding: 0 1rem;
  }
  
  .pricing-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .pricing-cards {
    flex-direction: column;
  }
  
  .pricing-card {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 1.25rem;
  }
  
  .amount {
    font-size: 2rem;
  }
}
</style>
