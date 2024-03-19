<template>
<div>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</div>
</template>
<script setup>
useHead({
  script: [ { innerHTML: `
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?42ad212ec8fd33be90a6104d3afa4ae4";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  ` } ]
})
</script>
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
