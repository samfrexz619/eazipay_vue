<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';
import NavBar from './components/layouts/NavBar.vue';
import DashboardLayout from './components/layouts/DashboardLayout.vue';


const route = useRoute() 

const layoutComponent = computed(()=> {
  let currentLayout = null
  const routeLayout = route.meta.layout;
  switch(routeLayout) {
    case 'navbar':
      currentLayout = NavBar
      break
    case 'dashboard':
      currentLayout = DashboardLayout
      break
    case 'empty':
      currentLayout = ''
      break;
    default:
      currentLayout = ''
  }
  return currentLayout
})
</script>

<template>
  <main>
    <component :is="layoutComponent">
      <RouterView />
    </component>
  </main>
</template>

