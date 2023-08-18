<template>
  <div class="w-full min-h-52 lg:h-72 bg-pry text-white rounded-2xl shadow-sm lg:shadow-200">
    <div class="lg:py-12 py-9 px-50px h-full flex items-center lg:flex-col lg:justify-center justify-start">
      <div>
        <h4 class="text-2xl font-bold pb-3">
          {{ title }}
        </h4>
        <div class="text-[16px] font-light">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>()
</script>

<style scoped>

</style>