<script setup lang="ts">
const route = useRoute()
let { widget } = route.params
</script>

<template>
  <div class="widget-page-container">
    <component :is="widget" />
  </div>
</template>

<style scoped>
.widget-page-container{
  height: 100vh;
}
</style>
