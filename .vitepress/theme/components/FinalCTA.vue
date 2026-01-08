<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '准备开始了吗？'
  },
  subtitle: {
    type: String,
    default: '立即体验，开启您的业务数字化之旅'
  },
  primaryText: {
    type: String,
    default: '免费开始'
  },
  primaryLink: {
    type: String,
    default: '/guide/quick-start'
  },
  secondaryText: {
    type: String,
    default: '查看文档'
  },
  secondaryLink: {
    type: String,
    default: '/guide/introduction'
  }
})
</script>

<template>
  <div class="final-cta">
    <div class="cta-content">
      <h2 class="title">{{ title }}</h2>
      <p class="subtitle">{{ subtitle }}</p>
      <div class="cta-actions">
        <a :href="primaryLink" class="btn btn-primary">{{ primaryText }}</a>
        <a :href="secondaryLink" class="btn btn-secondary">{{ secondaryText }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.final-cta {
  margin: 6rem auto 4rem;
  max-width: 1200px;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
  position: relative;
  overflow: hidden;
}

.final-cta::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, var(--vp-c-brand-soft) 0%, transparent 70%);
  opacity: 0.3;
  animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.2;
  }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.btn-primary:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-3);
}

.btn-secondary {
  background: transparent;
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.btn-secondary:hover {
  background: var(--vp-c-brand-soft);
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .final-cta {
    margin: 4rem auto 2rem;
    padding: 3rem 1.5rem;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    padding: 1rem 2rem;
  }
}

@media (max-width: 640px) {
  .title {
    font-size: 1.75rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>
