<script setup>
// import { useContent } from '@nuxt/content'

const { path } = useRoute()
// const { $content } = useContent()
const category = computed(() => {
  const name = path || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return strName
})
</script>

<template>
  <div>
    <Articles />
  </div>
</template>
