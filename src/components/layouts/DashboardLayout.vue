<template>
  <main class="w-full dashboard">
    <div class="flex justify-between">
      <aside class="fixed inset-y-0 w-300 hidden lg:flex flex-col bg-white">
        <AppDashboard :links="dashboardLinks" />
      </aside>
      <section class="">
        <div class="fixed top-0 lg:w-w_calc w-full lg:left-300 left-0 shadow-20">
          <BaseTop  @open="handleShowDashboard"/>
        </div>
        <main class="top-[13vh] fixed flex flex-col bottom-0 w-full lg:w-w_calc bg-[#F9FAFC] left-0 lg:left-300">
          <div class="overflow-y-auto w-full">
            <RouterView  />
          </div>
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