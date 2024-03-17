<template>
<div text-wrap class="snap-x">
  <slot />
</div>
</template>

<script setup>
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
  }
})
</script>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>