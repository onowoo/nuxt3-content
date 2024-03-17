<script setup>
const { path } = useRoute();
const { data } = await useAsyncData("page-data", () =>
  queryContent(path).findOne()
);
// console.log(data);
</script>

<template>
  <div class="max-w-[90%] lg:max-w-3xl mx-auto">
    <ContentQuery :path="$route.path" find="one">
      <template #default="{ data }">
        <div flex="~ col content">
          <div my-6 lg:my-10 flex="~ col justify-center items-center gap-3">
            <h1>{{ data.title }}</h1>
            <div>
              {{ data.date }}
            </div>
          </div>
          <Toc :links="data.body.toc.links" lg:hidden />
          <ContentRendererMarkdown :value="data" />
          <div 
          v-if="data.tags"
          flex="~ gap-2 items-center inline"
          class="w-full"
          text="xs dark:gray-300"
          my-6
          >
            Tags:
            <button
            v-for="item in data.tags" 
            :key="item"
            px-2
            flex="~ justify-center items-center"
            rounded-3
            overflow="hidden"
            border="1 #00dc82"
            bg="#00dc82/15 dark:#00dc82/25"
            @click="$router.push(`/tags/${item}`)"
            >{{item}}</button>
          </div>
        </div>
      </template>
      <template #not-found>
        <section
          class="min-h-[80vh] flex items-center h-full p-16 dark:text-gray-100"
        >
          <div
            class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
          >
            <div class="max-w-md text-center">
              <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                <span class="sr-only">Error</span>404
              </h2>
              <p class="text-2xl font-semibold md:text-3xl">
                对不起 没有此页面
              </p>
              <p class="mt-4 mb-8 dark:text-gray-400">
                可以通过顶部菜单浏览更多内容
              </p>
              <a
                rel="noopener noreferrer"
                href="/"
                class="px-8 py-3 font-semibold rounded dark:bg-gray-900 dark:text-gray-400"
                >返回首页</a
              >
            </div>
          </div>
        </section>
      </template>
    </ContentQuery>
  </div>
</template>
<style>
.content {
  @apply text-gray-700 dark:text-gray-200 text-sm
}
p {
  @apply leading-relaxed tracking-wide text-sm
}
blockquote {
  @apply rounded-2 p-4 leading-relaxed tracking-wide bg-gray-200 dark:(bg-gray-900/80) text-gray-400 text-sm
}
ul li {
  @apply list-disc ml-6 leading-relaxed tracking-wide text-sm
}
ol li {
  @apply list-decimal ml-6 leading-relaxed tracking-wide text-sm
}
h1 {
  @apply text-2xl text-center font-bold;
}
h2 {
  @apply text-xl border-[#00dc82] border-l-6 pl-4 rounded-1 font-bold my-4 lg:my-6;
}
h3 {
  @apply text-lg my-3 font-bold;
}
h4 {
  @apply text-base font-bold my-3 text-gray-700 dark:(text-gray-300 border-gray-700)  border-l-4 pl-4 rounded-1
}
</style>
