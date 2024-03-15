<template>
  <div class="grid grid-cols-2 mx-auto max-w-4xl w-full gap-6 md:grid-cols-4">
    <div
      v-for="i in 6"
      :key="i"
      class="documentation-container relative order-last col-span-2 row-span-2 max-w-110 items-center rounded-xl text-black shadow lg:order-none lg:col-span-2 dark:border-transparent hover:border-transparent dark:text-white"
    >
      <div class="gradient-border gradient-border-square gradient-border-documentation" />
      <div class="flex items-center justify-center gap-y-4 rounded-xl bg-white lg:flex-col dark:(bg-gray-900 hover:bg-gray-800)">
        <div class="flex flex-col items-center justify-center gap-y-2 rounded-xl px-5 py-6 sm:flex-row lg:flex-col lg:py-7">
          <div class="flex flex-col gap-3 text-left text-black dark:text-white">
            <div class="h-[100%] text-lg">
              文章标题{{ i }}
            </div>
            <p class="text-xs text-gray-700 dark:text-gray-300">
              这是文章摘要的一部分怎么截取呢，通过content,我只想使用markdown
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  syntax: '<angle>';
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
