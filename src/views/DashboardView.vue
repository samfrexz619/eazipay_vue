<template>
  <div class="lg:w-85% mx-auto  py-8">
    <h3 class="text-txtBold text-[36px] font-bold">Welcome {{ 'Abasaima' }}</h3>
    <small class="text-textPry text-16">
    Pay and manage your employee in minutes
    </small>
    <div class="py-10">
      <AppCard  />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/dashboard/AppCard.vue'
</script>

<style scoped lang="scss">

</style>