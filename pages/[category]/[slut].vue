<script setup>
const { path } = useRoute()
const { data } = await useAsyncData('page-data', () => queryContent(path).findOne())
console.log(data);
</script>

<template>
  <div>
    {{ $route.path }}
    <!-- <ContentQuery :path="$route.path" find="one">
      <template #default="{ data }">
        <div flex="~ col gap-4">
          <div>{{ data.title }}</div>
          <div>{{ data.date }}</div>
          
        </div>
      </template>
      <template #not-found>
        <p>No authors found.</p>
      </template>
    </ContentQuery> -->

    <ContentRenderer :value="data">
      <h1>{{ data.title }}</h1>
      <Toc :links="data.body.toc.links" />
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
    
    <ContentDoc v-slot="{ doc }">
      <article mt-10>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </div>
</template>
