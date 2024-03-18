<!-- ./components/Toc.vue -->

<script setup>
// define links prop
defineProps(["links"]);

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  // console.log({ _links });

  return _links;
};
</script>

<template>
  <nav class="p-4 border bg-gray-100/30 text-gray-400 dark:(bg-gray-800/50  border-gray-800) rounded-lg max-h-[calc(100vh-6rem)] overflow-auto">
    <header class="pb-2 mb-2 border-b border-gray-20 dark:border-gray-800">
      <h5>本文目录</h5>
    </header>
    <ul class="toc-links flex flex-col gap-2 px-2;">
      <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link _${link.depth}`">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc-link._2 {
  @apply pl-3 text-xs
}
.toc-link._3 {
  @apply pl-3 text-xs
}

.toc-link._4 {
  @apply pl-6 text-xs
}

.toc-link._undefined {
  @apply pl-8;
}
</style>