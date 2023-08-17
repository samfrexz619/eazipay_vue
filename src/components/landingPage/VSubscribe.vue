<template>
  <div class="w-full subscribe py-12">
    <div class="w-96 lg:w-86 mx-auto min-h-100 free-forever">
      <div class="flex h-full items-center justify-between flex-wrap relative">
        <img src="@/assets/dot.png" alt="" class="absolute -top-12 max-w-[50px]">
        <div class="lg:w-1/2 lg:pl-7 w-full lg:block flex flex-col items-center">
          <h2 class="lg:text-55 text-40 lg:text-start leading-none text-txtBold pb-5 font-medium text-center pt-12 lg:pt-0">
            Free Forever <br class="hidden lg:block"> for your <span class="text-eazi_red-10">salary <br> payment</span>
          </h2>
          <div class="hidden lg:block pt-12">
            <p class=" text-txtBold text-[18px]">Subscribe to the Eazilife today</p>
            <div class="flex gap-x-3 justify-center lg:justify-start py-4">
              <router-link to="#" class='bg-white rounded-lg shadow-300 block'>
                <img src='@/assets/google.png' alt="google" class="max-w-[170px]"/>
              </router-link>
              <router-link to="#" class='bg-white rounded-lg shadow-300 block'>
                <img src='@/assets/apple.png' alt="google"  class="max-w-[170px]"/>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex justify-center py-10 lg:py-0">
          <img src="@/assets/free-forever.png" alt="" class="lg:w-[600px] w-[500px]">
        </div>
        <div class="lg:hidden flex items-center flex-col justify-center w-full">
          <p class="pt-10 text-txtBold text-[18px]">Subscribe to the Eazilife today</p>
          <div class="flex gap-x-3 justify-center lg:justify-start py-4">
            <router-link to="#" class='bg-white rounded-lg shadow-300 block'>
              <img src='@/assets/google.png' alt="google" class="max-w-[170px]"/>
            </router-link>
            <router-link to="#" class='bg-white rounded-lg shadow-300 block'>
              <img src='@/assets/apple.png' alt="google"  class="max-w-[170px]"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
.subscribe {
  // color: #EA4E4B;
  background-color: #ffe9e7;
  background-image: url('@/assets/patterns.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  h2 {
    font-family: mellow;
  }
  // .free-forever {
  //   background-image: url('@/assets/dot.png');
  //   background-repeat: no-repeat;
  //   background-position: left top;
  //   background-size: 70px;
  // }
}
</style>