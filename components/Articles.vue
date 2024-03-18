<template>
    <ContentList :path="path">
      <template #default="{ list }">
        <div class="grid grid-cols-2 mx-6 lg:mx-auto max-w-3xl lg:max-w-4xl gap-6 md:grid-cols-4 mt-20 lg:mt-25">
        <div
            v-for="article in list"
            :key="article.body.id"
            v-show="article._path !== '/link'"
            class="documentation-container relative order-last col-span-2 row-span-2 max-w-110 items-center rounded-xl text-black lg:order-none lg:col-span-2 dark:border-transparent hover:border-transparent dark:text-white"
          >
            <div
              class="gradient-border gradient-border-square gradient-border-documentation h-40"
            />
            <div
              flex="~ col"
              class="h-40 p-6 rounded-xl bg-white lg:flex-col dark:(bg-gray-900/60 hover:bg-[#0c0f27] border-gray-800) border border-gray-200 hover:border-transparent"
            >
              <NuxtLink :to="article._path">
                <div h-8>{{ sliceStr(article.title,38) }}</div>
              </NuxtLink>
              <div text="xs gray-500" flex="1">{{ sliceStr(article.description,100) }}</div>
              <div flex="~" text="xs gray-500">
                <div>{{ article.category }}</div>
                <div ml-2>{{ article.date }}</div>
                <NuxtLink v-for="item in article.tags" :key="item" :to="`/tags/${item}`">
                  <div 
                    flex="~ items-center gap-2"
                    ml-2
                    @click="$router.push(`/tags`)"
                    >{{ item }}
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
            </div>
      </template>
      <template #not-found>
        <section class="min-h-[80vh] flex items-center h-full p-16 dark:text-gray-100">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
              <div class="max-w-md text-center">
                <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                  <span class="sr-only">Error</span>404
                </h2>
                <p class="text-2xl font-semibold md:text-3xl">对不起 没有此页面</p>
                <p class="mt-4 mb-8 dark:text-gray-400">可以通过顶部菜单浏览更多内容</p>
                <a 
                rel="noopener noreferrer" 
                href="/" 
                class="px-8 py-3 font-semibold rounded bg-[#00dc82] text-gray-900 shadow-lg hover:(bg-#00dc82/80)">
                返回首页
                </a>
              </div>
            </div>
          </section>
      </template>
    </ContentList>

</template>
<script setup>
const { path } = useRoute()
const { type } = useTagType()
const sliceStr = computed(()=>{
  return function (val,len) {
    return String(val).length > len ? String(val).slice(0,len) + "..." : val
  }
})
</script>

<style scoped>
  .gradient-border-documentation {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(0, 220, 130),
      rgba(0, 220, 130, 0.6),
      rgba(255, 255, 255, 0.8),
      rgba(0, 220, 130)
    );
  }

/* gradient border */
.gradient-border {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 2px);
  border-radius: 12px;
  z-index: -1;
  transform: translate(-1px, -1px);
}

.gradient-border-rect {
  height: calc(100% + 2px);
}

@media (min-width: 1024px) {
  .gradient-border-rect {
    height: calc(100% + 1px);
  }
}

.gradient-border-square {
  height: calc(100% + 2px);
}

.modules-gradient-right {
  opacity: 0;
}

.documentation-container:hover > .gradient-border {
  opacity: 1;
  animation: gradient-rotate 4s cubic-bezier(0, 0, 1, 1) 0s infinite reverse;
  transition: all 0.3s linear;
}

@media (prefers-color-scheme: dark) {
  /* documentation */
  .documentation-image-dark {
    display: block;
  }
  .documentation-image-light {
    display: none;
  }
  .documentation-container:hover > a > div > .documentation-image-color-dark {
    display: block;
  }
  .documentation-container:hover > a > div > .documentation-image-dark {
    display: none;
  }
}

@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 180deg;
}

@keyframes gradient-rotate {
  0% {
    --gradient-angle: 0deg;
  }

  100% {
    --gradient-angle: 360deg;
  }
}
</style>
