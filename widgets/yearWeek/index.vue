<script setup lang="ts">
import dayjs from "dayjs";
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

const today = dayjs()

const todayWeekNum = Math.floor(today.dayOfYear() / (365 / 50) )
</script>

<template>
  <div class="h-full">
    <div class="flex justify-between px-3 " >
      <div>
        {{today.year()}}
      </div>
      <div>
        {{todayWeekNum }} / 50
      </div>
    </div>
    <div class="p-1" style="height:calc(100% - 24px)">
      <div v-for="row in 5" :key="row" class="flex row">
        <div v-for="col in 10" :key="row+','+col" class="block"
             :class="{'pass': todayWeekNum > ((row-1) * 10 + col)}"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>


.row{
  height: 20%;
}

.block{
  width: calc(10% - 4px);
  margin: 2px;
  border: 1px solid #DFE1E4;
  box-sizing: border-box;
}

.block.pass{
  background: #EBEDF0;
}
</style>
