<template>
  <span>
    <svg v-if="name === 'dashboard'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#dashboard" />
    </svg>
    <svg v-else-if="name === 'wallet'" width="21" height="22" viewBox="0 0 21 22" >
      <use xlink:href="/sprite.svg#wallet" />
    </svg>
    <svg v-else-if="name === 'wallet'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#wallet" />
    </svg>
    <svg v-else-if="name === 'employment management'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#empMgt" />
    </svg>
    <svg v-else-if="name === 'payroll'" width="18" height="20" viewBox="0 0 18 20">
      <use xlink:href="/sprite.svg#payroll" />
    </svg>
    <svg v-else-if="name === 'compliance'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#compliance" />
    </svg>
    <svg v-else-if="name === 'quick loan'" width="21" height="22" viewBox="0 0 21 22">
      <use xlink:href="/sprite.svg#loan" />
    </svg>
    <svg v-else-if="name === 'book keeping'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#bk" />
    </svg>
    <svg v-else-if="name === 'support'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#support" />
    </svg>
    <svg v-else width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#setting" />
    </svg>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>()
</script>

<style scoped>

</style>