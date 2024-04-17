<script setup lang="ts">
const route = useRoute()
let { widget } = route.params
const Widget = resolveComponent(widget as string)

</script>

<template>
  <div class="widget-page-container">
    <component :is="Widget" />
  </div>
</template>

<style scoped>
.widget-page-container{
  height: 100vh;
}
</style>
