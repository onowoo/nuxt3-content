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
    <h1>Articles for {{ category }}</h1>
    <ContentList :path="path" v-slot="{ list }">
      <!-- {{ list }} -->
      <div v-for="article in list" :key="article._path" @click="$router.push(article._path)" cursor="pointer">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </div>
</template>
