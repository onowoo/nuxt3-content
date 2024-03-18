<template>
<div>
  <div h-10 mt-6 lg:h-15 border="t gray-200 dark:gray-800" flex="~ justify-center items-center" text="black dark:gray-400 xs" font-thin>
    Copyright © 2016-2024 ONO's Mark - MIT License <span hidden lg:flex>, Just build by Vue3 Nuxt3 Content Vite UnoCss</span>
  </div>
  <ClientOnly>
    <el-drawer
    v-model="menuStatus.status"
    :direction="direction"
    size="40%"
  >
    <template #header="{titleId,titleClass}">
      <span :id="titleId" :class="titleClass"><Logos /></span>
    </template>
         <div
          v-for="item in menuStatus.menu" 
          :key="item.path"
          :class="$route.path === item.path ? activeStyle : 'text-gray-900 dark:text-gray-200'"
          flex="~ col justify-center items-center"
        >
          <NuxtLink :to="item.path" py-1>{{ item.name }}</NuxtLink>
        </div>
  </el-drawer>
  </ClientOnly>
</div>
</template>
<script setup>
import { CircleCloseFilled } from '@element-plus/icons-vue'
const menuStatus = useMenu()
const activeStyle = ref("text-[#00dc82]");
const direction = ref('ttb')
</script>
