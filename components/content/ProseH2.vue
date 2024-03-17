<template>
  <h2>
    <slot />
  </h2>
</template>

<script setup>
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>