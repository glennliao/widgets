<script setup lang="ts">

const {data, pending} = await useAsyncData('data', async () => {
  const [hitokoto, bing] = await Promise.all([
    $fetch('https://v1.hitokoto.cn/?encode=json'),
    $fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
  ])
  return {
    hitokoto,
    bing
  }
})

const hitokoto = computed(() => {
  if(!data.value){
    return {}
  }
  let hitokoto  = data.value.hitokoto as { hitokoto: string, creator: string, from: string}
  return {
    hitokoto: hitokoto.hitokoto,
    creator: hitokoto.creator,
    from: hitokoto.from
  }
})

const bing = computed(() => {
  return data.value?.bing
})

</script>

<template>
  <div class="h-full relative">
    <template v-if="!pending ">
      <div v-if="bing" class="absolute top-0 left-0 right-0 bottom-0 bg"
           :style="{
        'background-image':`url('https://cn.bing.com${bing.images[0].url}')`
      }"/>

      <div v-if="hitokoto" class="h-full relative z-10 pt-20% text-white p-2 text-lg">
        <div class="font-bold">
          『 {{ hitokoto.hitokoto }} 』
        </div>
        <div class="flex justify-end mt-2 text-sm">
          —— {{ hitokoto.creator }} {{ hitokoto.from }}
        </div>
      </div>
    </template>

  </div>
</template>

<style scoped>
.bg{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: blur(1px)
}
</style>
