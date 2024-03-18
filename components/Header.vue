<script setup>
const menuStatus = useMenu()
</script>

<template>
  <nav
    class="px-5 lg:px-0 w-full max-w-4xl h-15 font-300"
    text="dark:white dark-300 14px"
    flex="~ justify-between items-center"
  >
    <Logos />
    <div flex="~ items-center gap-6">
      <div lg:flex="~ gap-4" hidden>
        <div
          v-for="item in menuStatus.menu" 
          :key="item.path"
          :class="$route.path === item.path ? menuStatus.activeStyle : ''"
        >
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </div>
      </div>
      <div text="lg gray4" flex="~ gap3 row-reverse lg:row" justify-center>
        <div i-carbon-overflow-menu-vertical lg:hidden @click="menuStatus.status = true"></div>
        <a i-carbon-logo-github href="https://github.com/" target="_blank" />
        <DarkToggle />
      </div>
    </div>
  </nav>
</template>