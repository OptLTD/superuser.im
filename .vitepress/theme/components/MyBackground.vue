<template>
  <div class="animated-background" :style="{ opacity: backgroundOpacity }">
    <!-- 渐变背景层 -->
    <div class="gradient-layer"></div>
    
    <!-- SVG 流畅波浪效果 -->
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path class="wave-path wave-1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      <path class="wave-path wave-2" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,154.7C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      <path class="wave-path wave-3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,154.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    
    <!-- 柔和光点效果 -->
    <div class="glow-points">
      <div 
        v-for="i in 5" 
        :key="i" 
        class="glow-point"
        :style="getGlowPointStyle(i)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 为每个光点生成随机样式
const getGlowPointStyle = (index) => {
  const delay = index * 1.5
  const duration = 8 + index * 2
  const left = index * 25
  const top = 30 + index * 20
  const size = 80 + index * 40
  
  return {
    '--delay': `${delay}s`,
    '--duration': `${duration}s`,
    '--left': `${left}%`,
    '--top': `${top}%`,
    '--size': `${size}px`
  }
}

// 背景透明度控制
const backgroundOpacity = ref(1)

const handleScroll = () => {
  const scrollY = window.scrollY || window.pageYOffset
  const viewportHeight = window.innerHeight
  
  // 第一屏到第二屏的滚动范围（0 到 100vh）
  // 在这个范围内，透明度从 1 变为 0.25
  if (scrollY <= viewportHeight) {
    // 计算透明度：从 1 线性过渡到 0.25
    const progress = scrollY / viewportHeight
    backgroundOpacity.value = 1 - (progress * 0.75) // 1 -> 0.25
  } else {
    // 超过第二屏后，保持 0.25
    backgroundOpacity.value = 0.25
  }
}

onMounted(() => {
  // 初始化透明度
  handleScroll()
  // 监听滚动事件，使用 passive 提升性能
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
}

/* 渐变背景层 */
.gradient-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at top,
    rgba(var(--vp-c-brand-rgb, 99, 102, 241), 0.08) 0%,
    transparent 50%
  );
  /* 移除动画以提升性能 */
}

/* SVG 流畅波浪 */
.waves {
  position: absolute;
  bottom: -10px;
  left: -10%;
  width: 120%;
  height: 60%;
  min-height: 300px;
  opacity: 0.6;
  will-change: transform;
  transform: translateZ(0); /* 启用 GPU 加速 */
}

.wave-path {
  fill: rgba(var(--vp-c-brand-rgb, 99, 102, 241), 0.12);
  animation: wave-flow 12s linear infinite;
  transform-origin: center;
  will-change: transform;
}

.wave-1 {
  fill: rgba(var(--vp-c-brand-rgb, 99, 102, 241), 0.15);
  animation-duration: 12s;
  animation-delay: 0s;
}

.wave-2 {
  fill: rgba(var(--vp-c-brand-rgb, 99, 102, 241), 0.1);
  animation-duration: 16s;
  animation-delay: -4s;
}

/* 移除第三层波浪以提升性能 */
.wave-3 {
  display: none;
}

@keyframes wave-flow {
  0% {
    transform: translateX(0) translateY(0) translateZ(0);
  }
  50% {
    transform: translateX(-1.5%) translateY(-8px) translateZ(0);
  }
  100% {
    transform: translateX(0) translateY(0) translateZ(0);
  }
}

/* 柔和光点效果 */
.glow-points {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.glow-point {
  position: absolute;
  width: var(--size, 80px);
  height: var(--size, 80px);
  left: var(--left, 0%);
  top: var(--top, 50%);
  background: radial-gradient(
    circle,
    rgba(var(--vp-c-brand-rgb, 99, 102, 241), 0.3),
    rgba(var(--vp-c-brand-rgb, 99, 102, 241), 0.1),
    transparent 70%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  /* 静态显示，无动画 */
}

/* 深色模式适配 */
:global(.dark) .gradient-layer {
  background: radial-gradient(
    ellipse at top,
    rgba(var(--vp-c-brand-rgb, 139, 92, 246), 0.12) 0%,
    transparent 50%
  );
}

:global(.dark) .wave-1 {
  fill: rgba(var(--vp-c-brand-rgb, 139, 92, 246), 0.2);
}

:global(.dark) .wave-2 {
  fill: rgba(var(--vp-c-brand-rgb, 139, 92, 246), 0.15);
}

:global(.dark) .wave-3 {
  fill: rgba(var(--vp-c-brand-rgb, 139, 92, 246), 0.1);
}

:global(.dark) .glow-point {
  background: radial-gradient(
    circle,
    rgba(var(--vp-c-brand-rgb, 139, 92, 246), 0.4),
    rgba(var(--vp-c-brand-rgb, 139, 92, 246), 0.15),
    transparent 70%
  );
}

/* 响应式优化 */
@media (max-width: 768px) {
  .waves {
    height: 50%;
    min-height: 200px;
  }
  
  .glow-point {
    width: 50px;
    height: 50px;
  }
}

/* 性能优化 - 减少动画复杂度 */
@media (prefers-reduced-motion: reduce) {
  .gradient-layer,
  .wave-path,
  .glow-point {
    animation: none;
  }
}
</style>

