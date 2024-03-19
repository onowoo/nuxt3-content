<template>
<div class="lg:max-w-4xl mx-auto mt-20 lg:mt-25">
  <ContentQuery>
    <div v-for="item in data.body[0].data" :key="item">
      <h2 class="my-4 mx-6 lg:mx-auto lg:max-w-4xl">{{ item.name }}</h2>
      <div
        class="grid grid-cols-2 mx-6 lg:mx-auto lg:max-w-4xl gap-6 md:grid-cols-6"
      >
        <div
          v-for="link in item.list"
          :key="link.id"
          class="documentation-container relative order-last col-span-2 row-span-2 max-w-110 items-center rounded-xl text-black shadow lg:order-none lg:col-span-2 dark:border-transparent hover:border-transparent dark:text-white"
        >
          <div
            class="gradient-border gradient-border-square gradient-border-documentation h-40"
          />
          <div
            flex="~ col gap-2"
            class="h-40 p-3 rounded-xl bg-white lg:flex-col dark:(bg-gray-900/60 hover:bg-[#0c0f27] border-gray-800) border border-gray-200 hover:border-transparent"
          >
            <div class="line-clamp-1 leading-7">{{ link.title }}</div>
            <div
              text="xs more gray-500"
              class="line-clamp-3 leading-6"
              flex="1"
            >
              {{ link.description }}
            </div>
            <div flex="~ justify-between items-center" text="xs gray-500">
              <div>{{ link.category }}</div>
              <div flex="~ gap-2">
                <NuxtLink :to="link.site" target="_blank"
                  ><el-tag type="info" size="small" effect="plain">{{
                    `官网`
                  }}</el-tag></NuxtLink
                >
                <NuxtLink :to="link.git" target="_blank"
                  ><el-tag type="info" size="small" effect="plain">{{
                    `仓库`
                  }}</el-tag></NuxtLink
                >
                <NuxtLink :to="link.doc" target="_blank"
                  ><el-tag type="info" size="small" effect="plain">{{
                    `文档`
                  }}</el-tag></NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContentQuery>
</div>
</template>
<script setup>
const { path } = useRoute();
const data = await queryContent('/link/').findOne()
// console.log(data);
useSeoMeta({
  title: data.body[0].title,
  ogTitle:  data.body[0].ogTitle,
  description:  data.body[0].description,
  ogDescription: data.body[0].ogDescription,
  keywords: data.body[0].keywords,
  ogKeywords: data.body[0].ogKeywords
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
  animation: gradient-rotate 5s cubic-bezier(0, 0, 1, 1) 0s infinite reverse;
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
.more {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
