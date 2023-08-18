<template>
  <div class="w-full py-7">
    <div class="grid md:grid-cols-4 py-10 gap-4">
      <div class="md:col-span-3">
        <VWallet  />
        <div class="grid grid-cols-4 md:gap-5 gap-2 pt-5">
          <div v-for="item in cardItems" :key="item.id" class="">
            <MiniCard :name="item.name" />
          </div>
        </div>
      </div>
      <div class="row-auto self-stretch flex">
        <PayrollCard  />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { uid } from 'uid';
import VWallet from './VWallet.vue'
import MiniCard from './MiniCard.vue'
import PayrollCard from './PayrollCard.vue';

interface CardItems {
  name: string;
  id: string;
}

const cardItems = ref<CardItems[]>([
  {
    name: 'add employee',
    id: uid(4)
  },
  {
    name: 'pay salaries',
    id: uid(4)
  },
  {
    name: 'pay compliance',
    id: uid(4)
  },
  {
    name: 'quick loan',
    id: uid(4)
  },
])
</script>

<style scoped>

</style>