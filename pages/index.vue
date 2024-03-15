<script setup lang="ts">
</script>

<template>
  <div class="text-dark-400 dark:bg-white">
    <Header />
    <Logos mb-6 />
    <InputEntry />
    <ui-landing-card />
    <!-- <ContentList /> -->
    <ContentList path="/" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p>{{ article.date }}</p>
      </div>
    </ContentList>
  </div>
</template>