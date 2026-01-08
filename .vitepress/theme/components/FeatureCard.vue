<script setup lang="ts">
defineProps({
  title: {
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
  <div :class="['feature-card', { reverse }]">
    <div class="feature-main">
      <h3 class="title">
        {{ title }}
      </h3>
      <div class="intro">
        <slot name="intro" />
      </div>
    </div>
    <div class="feature-image">
      <slot name="image" />
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  gap: 1rem;
  display: flex;
  align-items: center;
  /* min-height: 400px; */
}

.feature-card.reverse {
  flex-direction: row-reverse;
}

.feature-main,
.feature-image {
  height: 360px;
  display: flex;
  flex-direction: column;
}
.feature-main:hover,
.feature-image:hover{
  box-shadow: var(--vp-shadow-5);
}

.feature-main {
  width: 400px;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand);
}

.feature-main .title {
  margin: 12px 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  color: var(--vp-c-text-1);
}
.feature-main .intro {
  font-size: 15px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
.feature-main .intro:deep(p) {
  margin-bottom: 2rem;
}

.feature-image {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image :deep(img) {
  height: 100%;
  max-width: 100%;
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

  .feature-main{
    width: auto;
    height: auto;
  }
  
  .feature-main .title {
    font-size: 1rem;
  }
  
  .feature-main .intro {
    font-size: 1rem;
  }
  
  .feature-image {
    min-height: 200px;
  }
}

@media (max-width: 640px) {
  .feature-card {
    gap: 1.5rem;
    border-radius: 0px;
    padding: 1.5rem;
    margin: 12px -24px;
  }
  
  .feature-main .title {
    font-size: 1.75rem;
  }
  
  .feature-main .intro {
    font-size: 0.95rem;
  }
}
</style>