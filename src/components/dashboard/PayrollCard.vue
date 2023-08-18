<template>
  <div class="w-full rounded-3xl bg-white border border-solid border-[#E7E8E7] shadow-30 h-full">
    <div>
      <div class="py-4 bg-lemon round flex justify-center items-center h-full">
        <p class="text-textPry font-semibold">Next payroll</p>
      </div>
      <div class="py-9 flex justify-center flex-col items-center">
        <div class="flex py-3 items-center gap-x-1">
          <svg width="24" height="25" viewBox="0 0 24 25">
            <use xlink:href="/sprite.svg#calendar" />
          </svg>
          <small class="text-xs">{{ 'Friday' }}</small>
        </div>
        <p class="font-bold text-[18px] text-textPry">{{ '09/11/2022' }}</p>
      </div>
      <i class="block w-full h-[1px] bg-[#E7E8E7]"></i>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.round {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px 9px 18px 0px rgba(170, 170, 170, 0.15);
}
</style>