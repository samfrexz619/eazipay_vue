<template>
  <section class="w-full hero__banner mt-10">
    <div class="w-96 lg:h-[95vh] min-h-[70vh] lg:w-86 mx-auto">
        <div class="block lg:flex h-full items-center lg:justify-start text-center lg:text-start">
          <div class="w-full lg:w-1/2">
            <h1 class="lg:text-[62px] text-55 leading-none text-[#292A29] font-medium">
              Run your payroll <br />
              <span class="text-[#b4a527]">easily</span> in <span class="text-eazi_red-10">seconds</span>
            </h1>
            <div class="pt-10">
              <p class="text-pry text-xl font-normal">
              We’ve built an all-inclusive simple solution for <br class="hidden md:block" /> individual and businesses to manage staff, pay <br class="hidden md:block" /> salaries, bills, and relevant taxes all at once.
              </p>
            </div>
            <div class="pt-8 w-[250px] mx-auto lg:mx-0">
              <BaseButton variant='filled' class='py-3 px-9'>
                Start using for free
              </BaseButton>
            </div>
            <div class="py-10">
              <p class="text-black py-5">Download the Eazipay App</p>
              <div class="flex gap-x-3 justify-center lg:justify-start">
                <router-link to="#" class='bg-white rounded-lg'>
                  <img src='@/assets/google.png' alt="google" class="max-w-[170px]"/>
                </router-link>
                <router-link to="#" class='bg-white rounded-lg'>
                  <img src='@/assets/apple.png' alt="google"  class="max-w-[170px]"/>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue';
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

.hero__banner {
  width: 100%;
  @media(min-width: 1024px) {
    background-image: url('@/assets/banner.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 850px;
  }
  h1 {
    font-family: mellow;
  }
}
</style>