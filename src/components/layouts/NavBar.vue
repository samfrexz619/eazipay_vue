<template>
  <main>
    <nav>
      <TopNav  />
    </nav>
    <section>
      <RouterView  />
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopNav from '../navigation/TopNav.vue'

</script>

<style scoped>

</style>