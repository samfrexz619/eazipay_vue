<template>
  <div class="w-full rounded-3xl bg-white border border-solid border-[#E7E8E7] shadow-30 h-auto">
    <div class="h-auto">
      <div class="py-4 bg-lemon round flex justify-center items-center">
        <p class="text-textPry font-semibold">Next payroll</p>
      </div>
      <div class="py-7 flex justify-center flex-col items-center mb-5">
        <div class="flex py-3 items-center gap-x-1">
          <svg width="24" height="25" viewBox="0 0 24 25">
            <use xlink:href="/sprite.svg#calendar" />
          </svg>
          <small class="text-xs">{{ 'Friday' }}</small>
        </div>
        <p class="font-bold text-[18px] text-textPry">{{ '09/11/2022' }}</p>
      </div>
      <i class="block w-full h-[1px] bg-[#E7E8E7]"></i>
    </div>
      <div class="py-3 px-4 flex flex-col justify-end h-auto">
        <p class="text-textPry py-2 font-medium text-[16px]">Total Employee</p>
        <div class="w-full">
          <h2 class="font-bold text-[33px] pb-2">{{ sum }}</h2>
          <div class="w-full flex">
            <div class="w-1/2">
              <i class="w-full h-2 bg-pry block"></i>
              <p class="text-[10px] font-bold text-[#8D8E8D] py-1">
                Male <br> {{ male }}
              </p>
            </div>
            <div class="w-1/2">
              <i class="w-full h-2 bg-eazi_red-10 block"></i>
              <p class="text-[10px] font-bold text-[#8D8E8D] py-1">
                Female <br> {{ female }}
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const male = ref(32)
const female = ref(32)

const sum = computed(()=> {
  return male.value + female.value
})
</script>

<style scoped lang="scss">
.round {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px 9px 18px 0px rgba(170, 170, 170, 0.15);
}
</style>