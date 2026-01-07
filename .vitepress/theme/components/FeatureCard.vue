<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['feature-card', { reverse: reverse }]">
    <div class="feature-content">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ description }}</p>
      <div class="list">
        <slot name="list" />
      </div>
    </div>
    <div class="feature-image">
      <slot name="image" />
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-height: 400px;
}

.feature-card:hover {
  background: var(--vp-c-bg);
  box-shadow: var(--vp-shadow-5);
  border-color: var(--vp-c-brand);
}

.feature-card.reverse {
  flex-direction: row-reverse;
}

.feature-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-content .title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--vp-c-text-1);
  margin: 0;
}

.feature-content .desc {
  font-size: 1.125rem;
  line-height: 1.2;
  color: var(--vp-c-text-2);
  margin: 0;
}

.feature-content .list {
  font-size: 1rem;
  margin-top: 0.5rem;
}

.feature-image {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.feature-image :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: var(--vp-shadow-2);
}

/* 响应式设计 */
@media (max-width: 968px) {
  .feature-card {
    flex-direction: column !important;
    gap: 2rem;
    padding: 2rem;
    min-height: auto;
  }
  
  .feature-card.reverse {
    flex-direction: column !important;
  }
  
  .feature-content .title {
    font-size: 1rem;
  }
  
  .feature-content .desc {
    font-size: 1rem;
  }
  
  .feature-image {
    min-height: 200px;
  }
}

@media (max-width: 640px) {
  .feature-card {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  
  .feature-content .title {
    font-size: 1.75rem;
  }
  
  .feature-content .desc {
    font-size: 0.95rem;
  }
}
</style>