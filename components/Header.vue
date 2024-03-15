<script setup>
import { useContent } from '@nuxt/content'

const route = useRoute()
const { $content } = useContent()
const { params } = route
const currentCategory = params.category || '' // 如果没有category参数，则为空字符串

const menuItems = await $content('menus').fetch() // 假设您的菜单项存储在menus集合中
</script>

<template>
  <nav>
    <ul>
      <li v-for="menuItem in menuItems" :key="menuItem.slug" :class="{ active: currentCategory === menuItem.slug }">
        <NuxtLink :to="`/${menuItem.slug}`">
          {{ menuItem.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.active {
  /* 添加高亮样式 */
  font-weight: bold;
}
</style>
