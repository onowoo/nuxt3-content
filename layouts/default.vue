<template>
<div min-h-screen flex="~ col">
  <div class=" bg-white dark:bg-gray-900/60 shadow"><Header /></div>
  <main text="dark-400 dark:white" w-full flex="grow" flex-1 overflow="auto">
    <slot />
  </main>
  <Footer />
</div>
</template>
