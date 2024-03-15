<script setup>
import { useContent } from '@nuxt/content'

const route = useRoute()
const { $content } = useContent()
const { params } = route
const category = params.category

const articles = await $content(`blog/${category}`).fetch()
</script>

<template>
  <div>
    <h1>Articles for {{ category }}</h1>
    <ul>
      <li v-for="article in articles" :key="article.uid">
        <NuxtLink :to="`/${category}/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
