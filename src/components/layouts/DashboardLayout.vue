<template>
  <main class="w-full">
    <div class="flex">
      <aside>
        <AppDashboard :links="dashboardLinks" />
      </aside>
      <section class="">
        <div class="fixed top-0 w-w_calc left-272">
          <BaseTop />
        </div>
        <main class="relative left-272 mt-28">
          <RouterView  />
        </main>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppDashboard from '../navigation/AppDashboard.vue';
import BaseTop from '../navigation/BaseTop.vue';
import { dashboardLinks } from '../navigation/links';

</script>

<style scoped lang="scss">

</style>