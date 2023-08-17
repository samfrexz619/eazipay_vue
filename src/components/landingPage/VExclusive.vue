<template>
  <div class="exclusive w-full">
    <div class="w-96 lg:w-86 mx-auto min-h-100 py-12">
      <div class="flex flex-wrap justify-between items-center h-full">
        <div class="w-full lg:w-1/2 lg:block flex flex-col items-center py-3 lg:py-0">
          <h2 class="lg:text-55 text-40 text-pry font-medium leading-tight">
            Get an Exclusive <br> Demo of Eazipay
          </h2>
          <p class="py-7 font-light text-[20px] text-textPry text-center lg:text-start">
            Our greatest priority is to put you and <br> your business first. Let’s show you how <br> we can help.
          </p>
        </div>
        <div class="w-full flex justify-center lg:block lg:w-1/2">
          <BaseForm  />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseForm from './BaseForm.vue';
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
@font-face {
  font-family: aeonik;
  src: url('./assets/fonts/AeonikTRIAL-Light.otf');
  font-weight: 300;
}

.exclusive {
  background-image: url('@/assets/exclsv.png');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 130px;
  h2 {
    font-family: mellow;
  }
  p {
    font-family: aeonik;
  }
}
</style>