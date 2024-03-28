<script setup lang="ts">

</script>

<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
        <NuxtPage />
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>

    <div class="flex">
      <UCard class="mt-10" title="yearWeek" size="small">
        <template #header>
          <div class="flex justify-between">
            <h1>yearWeek</h1>
          </div>
        </template>
        <iframe src="/widgets/yearWeek" style="border: none;width:300px;height: 200px"/>
      </UCard>
    </div>

  </UContainer>
</template>

<style scoped>

</style>
