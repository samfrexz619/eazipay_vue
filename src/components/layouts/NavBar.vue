<template>
  <main class="">
    <nav>
      <TopNav  />
    </nav>
    <section>
      <RouterView  />
    </section>
    <div>
      <BaseFooter  />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopNav from '../navigation/TopNav.vue'
import BaseFooter from '../BaseFooter.vue';

</script>

<style scoped>

</style>