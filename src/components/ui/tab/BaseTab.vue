<template>
  <div v-show="title === selectedTitle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';


defineProps<{
  title: string;
}>()

const selectedTitle = inject('selectedIndex')
</script>

<style scoped lang="scss">

</style>