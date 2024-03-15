<script setup>
// import { useContent } from '@nuxt/content'
// const route = useRoute()
// // const { $content } = useContent()
// const { params } = route
// console.log(route);
// const currentCategory = params.category || '' // 如果没有category参数，则为空字符串

// const menuItems = await $content('menus').fetch() // 假设您的菜单项存储在menus集合中
</script>

<template>
    <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>

<style scoped>
.active {
  /* 添加高亮样式 */
  font-weight: bold;
}
</style>
