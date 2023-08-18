<template>
  <div class="w-full py-10">
    <div class="w-96 lg:w-86 mx-auto eazi h-115 py-10">
      <div class="text-center pb-10">
        <h2 class="capitalize text-pry lg:text-55 text-40 font-medium">
          How eazipay works
        </h2>
        <p class="text-2xl text-textPry">Get started in 3 simple steps</p>
      </div>
      <div class="flex mt-16 gap-x-5">
        <div class="relative lg:w-1/2 w-full flex lg:block justify-center">
          <img src='@/assets/bg.png' alt=""  class="max-w-[100%] lg:block hidden relative"/>
          <div class='absolute -top-4 lg:left-[23%]'>
            <img 
              src='@/assets/payroll.gif' 
              alt="phone" 
              class='md:w-[280px] w-[200px] rounded-[50px]'
            />
          </div>
        </div>
        <div className='lg:w-1/2 lg:block hidden'>
          <div>
            <ProgressBar  />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgressBar from './ProgressBar.vue';


</script>

<style scoped lang="scss">
@font-face {
  font-family: mellow;
  src: url('@/assets/fonts/MADEMellowPERSONALUSE-Regular.otf');
  font-weight: normal;
}
@font-face {
  font-family: mellow;
  src: url('@/assets/fonts/MADEMellowPERSONALUSE-Medium.otf');
  font-weight: 500;
}
.eazi {
  .eazi__bg {
    background-image: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  h2 {
    font-family: mellow;
  }
}
</style>