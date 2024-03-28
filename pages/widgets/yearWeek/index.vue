<script setup lang="ts">
import dayjs from "dayjs";
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

const today = dayjs()

const todayWeekNum = Math.floor(today.dayOfYear() / (365 / 50) )
</script>

<template>
  <div >
    <div class="">
      <div class="flex justify-between px-3" >
        <div>
          {{today.year()}}
        </div>
        <div>
          {{todayWeekNum }} / 50
        </div>
      </div>
      <div class="p-1">
        <div v-for="row in 5" :key="row" class="flex">
          <div v-for="col in 10" :key="row+','+col" class="block"
               :class="{'pass': todayWeekNum > ((row-1) * 10 + col)}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block{
  width: calc(10vw - 4px);
  height: calc(10vw - 4px);
  margin: 2px;
  border: 1px solid #acacac;
  box-sizing: border-box;
}

.block.pass{
  background: #9ba48e;
}
</style>
