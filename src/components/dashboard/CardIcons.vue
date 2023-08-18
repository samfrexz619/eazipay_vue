<template>
  <span>
    <svg v-if="name === 'add employee'" width="21" height="20" viewBox="0 0 21 20">
      <use xlink:href="/sprite.svg#empMgt" />
    </svg>
    <svg v-else-if="name === 'pay salaries'" width="23" height="16" viewBox="0 0 23 16">
      <use xlink:href="/sprite.svg#salary" />
    </svg>
    <span v-else-if="name === 'pay compliance'">
      <SendIcon  />
    </span>
    <svg v-else width="21" height="22" viewBox="0 0 21 22">
      <use xlink:href="/sprite.svg#loan" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import SendIcon from '../ui/icons/SendIcon.vue';

defineProps<{
  name: string;
}>()
</script>

<style scoped>

</style>