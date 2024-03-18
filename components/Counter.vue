<script setup lang="ts">
const { count } = useCount();
</script>

<template>
<div>
  <el-input-number v-model="count" :min="1" :max="10" />
</div>
</template>
