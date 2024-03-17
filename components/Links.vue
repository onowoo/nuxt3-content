<template>
  <div class="grid grid-cols-2 mx-auto max-w-4xl w-[90%] lg:w-full gap-6 md:grid-cols-6 mt-6 lg:mt-10">
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <div
        v-for="link in data.body"
        :key="link.id"
        class="documentation-container relative order-last col-span-2 row-span-2 max-w-110 items-center rounded-xl text-black shadow lg:order-none lg:col-span-2 dark:border-transparent hover:border-transparent dark:text-white"
      >
        <div
          class="gradient-border gradient-border-square gradient-border-documentation h-40"
        />
        <div
          flex="~ col"
          class="h-40 p-6 rounded-xl bg-white lg:flex-col dark:(bg-gray-900/60 hover:bg-[#0c0f27] border-gray-800) border border-gray-200 hover:border-transparent"
        >
          <div h-8>{{ link.title }}</div>
          <div text="xs more gray-500" flex="1">{{ sliceStr(link.description,50) }}</div>
          <div flex="~ justify-between" text="xs gray-500">
            <div>{{ link.category }}</div>
            <div flex="~ gap-2">
              <NuxtLink :to="link.site" target="_blank">{{ `官网` }}</NuxtLink>
              <NuxtLink :to="link.site" target="_blank">{{ `仓库` }}</NuxtLink>
              <NuxtLink :to="link.site" target="_blank">{{ `文档` }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </ContentQuery>
  </div>
</template>
<script setup>
const { path } = useRoute()
const sliceStr = computed(()=>{
  return function (val,len) {
    return String(val).length > len ? String(val).slice(0,len) + "..." : val
  }
})
</script>

<style scoped>
@media (prefers-color-scheme: light) {
  .gradient-border-documentation {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(0, 220, 130),
      rgba(0, 220, 130, 0.6),
      rgba(255, 255, 255, 0.8),
      rgba(0, 220, 130)
    );
  }
}

@media (prefers-color-scheme: dark) {
  .gradient-border-documentation {
    background: linear-gradient(
      var(--gradient-angle),
      rgba(0, 220, 130),
      rgba(0, 63, 37),
      rgba(255, 255, 255, 0.2),
      rgba(0, 63, 37)
    );
  }
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
