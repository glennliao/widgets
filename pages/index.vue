<script setup lang="ts">

const useHtml = (name:string)=>{
  return `<iframe src="https://widgets.glenn.pub/widgets/${name}" style="border:1px solid #EAEAEB;width:300px;height:200px;overflow:hidden"/>`
}
const widgetList = ref([
  {
    name: 'yearWeek',
    title: 'yearWeek',
    description: '一周是一年的2%',
  }
])
</script>

<template>
  <UContainer class="page">

    <div class="bg z-1"/>

    <div class="z-10 relative">
      <UCard class="mt-10 ">
        <template #header>
          <div class="flex justify-between">
            <h1>Welcome to Widget </h1>
            <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
          </div>
          <NuxtPage />
        </template>
      </UCard>

      <div class="flex ">
        <template v-for="item in widgetList" :key="item.name">
          <UCard class="mt-10" >
            <template #header>
              <div class="flex justify-between">
                <h1>{{item.title}}</h1>
                <div class="text-md">
                  {{item.description}}
                </div>
              </div>
            </template>

            <template #footer>
              <div class="flex justify-end">
                <UPopover class="mt-2" :popper="{ placement: 'top-end' }">
                  <UButton color="white" label="use" trailing-icon="i-heroicons-chevron-down-20-solid" />
                  <template #panel="{ close }">
                    <div class="p-4">
                      <pre>{{ useHtml(item.name) }}</pre>
                    </div>
                  </template>
                </UPopover>
              </div>
            </template>

            <div class="widget-container">
              <component :is="item.name"/>
            </div>


          </UCard>
        </template>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.page{
  padding: 12px;
  height: 100vh;
}

.bg{
  position: fixed;
  top:0;
  left:0;
  right:0;
  height: 100vh;
  background-image: url("https://www.dmoe.cc/random.php");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(1px);
}

.widget-container{
  width:300px;
  height: 200px;
}


</style>
