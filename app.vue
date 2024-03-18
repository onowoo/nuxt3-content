<template>
<div>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
html {
  scroll-padding-top: 80px;
  background: #fff;
  color: white;
}
html.dark {
  background: rgb(2 4 32);
  color: white;
}
</style>
