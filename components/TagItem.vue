<script setup>
const { path } = useRoute();
const { data } = await useAsyncData("all-blog-post-for-category", () =>
  queryContent(path).sort({ _id: -1 }).find()
);
const allTags = new Map();
data.value?.forEach((blog) => {
  const tags = blog.tags || [];
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag);
      allTags.set(tag, cnt + 1);
    } else {
      allTags.set(tag, 1);
    }
  });
});
const tagsColor = [
  'bg-gray-200 hover:bg-gray-300',
  'bg-red-200 hover:bg-red-300',
  'bg-yellow-200 hover:bg-yellow-300',
  'bg-green-200 hover:bg-green-300',
  'bg-sky-200 hover:bg-sky-300',
  ]
const getRandomColorClass = () => {  
      return tagsColor[Math.floor(Math.random() * tagsColor.length)];  
    }  

</script>
<template>
<div flex="~ justify-start items-center" mt-6 lg:mt-10 max-w-4xl mx-auto>
  <ClientOnly>
  <div
    v-for="item in allTags"
    :key="item"
    :class="getRandomColorClass()"
    cursor="pointer"
    @click="$router.push(`/tags/${item[0]}`)"
    class="max-w-3xl inline-flex items-center m-2 px-2 py-1 rounded-full text-xs font-semibold text-gray-600"
  >
    {{ item[0] }} ({{ item[1] }})
  </div>
  </ClientOnly>
</div>
</template>
