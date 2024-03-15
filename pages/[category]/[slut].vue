<script setup>
import { useContent } from '@nuxt/content'

const route = useRoute()
const { $content } = useContent()
const { params } = route
const { category, slug } = params

const article = await $content(`blog/${category}/${slug}`).fetch()
</script>

<template>
  <div>
    <h1>{{ article.title }}</h1>
    <!-- 渲染文章内容 -->
  </div>
</template>
