<template>
  <div class="card w-full">
    <div class="h-[30vh] flex w-86 mx-auto justify-center flex-col">
      <p class="text-lemon py-3 text-16">Wallet Balance</p>
      <div class="lg:flex justify-between w-full flex-wrap">
        <div class="flex gap-x-4 w-full lg:w-auto justify-between md:justify-start items-center">
          <h3 class="text-white text-[30px] font-bold">
            N{{toggleEye ? '12,560,078.00' : ' *********' }}
          </h3>
          <button @click="handleToggle" class="">
            <img v-if="!toggleEye" src="@/assets/eyeslash.svg" alt="">
            <EyeIcon v-else />
          </button>
        </div>
        <button class="bg-lemon rounded-[24px] px-7 py-3 w-full md:w-auto my-6 lg:my-0">
          Fund wallet
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EyeIcon from '../ui/icons/EyeIcon.vue';


const toggleEye = ref(true)

const handleToggle =()=> {
  toggleEye.value = !toggleEye.value
}


</script>

<style scoped lang="scss">
.card {
  background-image: url('@/assets/dashb.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  border-radius: 24px;
  box-shadow: 0px 20px 48px 0px rgba(170, 170, 170, 0.29);
  border: 1px solid #E7E8E7;

}
</style>