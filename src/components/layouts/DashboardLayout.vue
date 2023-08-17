<template>
  <main class="w-full dashboard">
    <div class="flex">
      <aside class="fixed inset-y-0 w-272 hidden lg:flex flex-col">
        <AppDashboard :links="dashboardLinks" />
      </aside>
      <section class="">
        <div class="fixed top-0 lg:w-w_calc w-full lg:left-272 left-0">
          <BaseTop  @open="handleShowDashboard"/>
        </div>
        <main class="top-[13vh] fixed flex bottom-0 w-full lg:w-w_calc bg-[#F9FAFC] left-0 lg:left-272">
          <RouterView  />
        </main>
      </section>
    </div>
    <MobileDashNav 
      v-if="showDashboardNav" 
      :links="dashboardLinks" 
      @close="handleShowDashboard"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppDashboard from '../navigation/AppDashboard.vue';
import BaseTop from '../navigation/BaseTop.vue';
import MobileDashNav from '../navigation/MobileDashNav.vue';
import { dashboardLinks } from '../navigation/links';


const showDashboardNav = ref(false)

const handleShowDashboard =()=> {
  showDashboardNav.value = !showDashboardNav.value
}

</script>

<style scoped lang="scss">

</style>