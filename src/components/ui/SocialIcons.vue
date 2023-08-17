<template>
  <span>
    <svg v-if="name === 'instagram'" width="32" height="32" viewBox="0 0 32 32">
      <use xlink:href="/sprite.svg#insta" />
    </svg>
    <svg v-else-if="name === 'twitter'" width="32" height="32" viewBox="0 0 32 32">
      <use xlink:href="/sprite.svg#twitter" />
    </svg>
    <svg v-else-if="name === 'linkedIn'" width="32" height="32" viewBox="0 0 32 32">
      <use xlink:href="/sprite.svg#linkedin" />
    </svg>
    <svg v-else width="32" height="32" viewBox="0 0 32 32">
      <use xlink:href="/sprite.svg#fb" />
    </svg>

  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>()
</script>
