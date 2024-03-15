<script setup lang="ts">
const online = useOnline()
</script>

<template>
  <div class="mt-2">
    <Header />
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
    <ui-landing-card />
    <ContentList />
  </div>
</template>
