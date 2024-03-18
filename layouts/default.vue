<template>
<div min-h-screen flex="~ col">
  <div 
  class="w-full flex justify-center items-center h-15"
  border="b gray-100 dark:gray-700"
  bg="light-50/75 dark:gray-800/75"
  backdrop="~ blur-4"
  fixed
  z-50
  ><Header /></div>
  <main text="dark-400 dark:white" w-full flex="grow" flex-1 overflow="auto">
    <slot />
  </main>
  <Footer />
</div>
</template>
