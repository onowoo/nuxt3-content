<template>
  <ProseCode :code="$props.code" :language="$props.language" :filename="$props.filename" :highlights="$props.highlights" :meta="$props.meta">
    <div flex="~ col" my-4 rounded-2 overflow="hidden" border dark:border-0>
      <div flex="~ justify-between items-center" px-4 h-10 bg-gray-200 dark:bg-gray-800>
        <div flex="~ gap-3 items-center" text="base gray-500 dark:gray-400">{{ $props.language }} <em text-xs v-if="$props.filename"> {{ `"${$props.filename}"` }}</em></div>
        <div i-carbon-copy text="xs gray-500 dark:gray-400" cursor="pointer" @click="clip($props.code)"></div>
      </div>
      <pre 
      :class="$props.class" 
      :style="style"
      flex="~"
      bg-gray-100 dark:bg-gray-700 px-4 py-2 text-xs leading-6 overflow-auto text-wrap
      >
      <slot />
      </pre>
    </div>
  </ProseCode>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array,
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  },
  style: {
    type: Object,
    default: null
  }
})
const { text, copy, copied, isSupported } = useClipboard()
const clip = (item) => {
  if (process.client) {
     if (isSupported.value === true) {
      copy(item)
      ElMessage({
        message: '复制成功！',
        type: 'success',
      })
    } else {
      ElMessage({
        message: '浏览器不支持！',
        type: 'warning',
      })
    } 
  }
}
</script>

<style>
pre code .line {
  display: block;
}
</style>