<script setup>
const menu = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "前端",
    path: "/frontend",
  },
  {
    name: "后端",
    path: "/backend",
  },
  {
    name: "导航",
    path: "/link",
  },
];
const activeStyle = "text-[#00dc82]";
</script>

<template>
  <nav
    class="w-full max-w-4xl mx-auto h-15 font-300"
    text="dark:white dark-300 14px"
    flex="~ justify-between items-center"
  >
    <Logos />
    <div flex="~ items-center gap-6">
      <ul flex="~ gap-4">
        <li
          v-for="item in menu"
          :key="item.path"
          :class="$route.path === item.path ? activeStyle : ''"
        >
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
      </ul>
      <div text="lg gray4" flex="~ gap3" justify-center>
        <NuxtLink i-carbon-campsite to="/" />
        <a
          i-carbon-logo-github
          href="https://github.com/"
          target="_blank"
        />
        <DarkToggle />
      </div>
    </div>
  </nav>
</template>