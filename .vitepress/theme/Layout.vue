<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { watchEffect } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData } from 'vitepress'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>