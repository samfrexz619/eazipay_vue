<template>
  <div @click.self="closeNav" class="fixed inset-y-0 w-full flex lg:hidden bg-bgg justify-start z-50">
    <div class="bg-white relative w-300">
      <div class="bg-white shadow-10 nav w-full overflow-y-auto">
    <div class="w-full">
      <div class="flex items-center justify-center min-h-[19vh] w-full">
        <img src="@/assets/logo-white.svg" alt="logo" class="block">
      </div>
      <nav class="w-full pt-12">
        <ul class="w-full">
          <li
            v-for="link in links"
            :key="link.id"
            class="w-full flex h-full items-center"
          >
            <router-link :to="link.path" class="w-full flex text-[18px] h-[59px] items-center capitalize">
              <i v-if="link.name === route.name" class="w-1 h-full rounded-100 bg-pry block"></i>
              <span class="block pl-5 pr-4">
                <DashboardIcons :name="link.name" />
              </span>
              <span>{{ link.name }}</span>
            </router-link>
            <span 
              v-if="link.name !== 'dashboard' 
              && link.name !== 'wallet'
              && link.name !== 'support'" 
              class=""
            >
              <ChevIcons  />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import DashboardIcons from './DashboardIcons.vue';
import ChevIcons from '../ui/icons/ChevIcon.vue'
import { Links } from './links';

defineProps<{
  links: Links[]
}>()

const emits = defineEmits(['close'])

const closeNav =()=> {
  emits('close')
}
const route = useRoute()

</script>

<style scoped lang="scss">
.nav {
  background-image: url('@/assets/dashb.svg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain; 
  ul {
    li {
      border-bottom: 1px solid #E7E8E7;
    }
  }
}

a {
  color: #515251;
  background: none;
  border: none;
}
a.router-link-active {
  color: #11453B;
  background: rgba(240, 247, 235, 0.50);
  // border-left: 5px solid #11453B;
}
</style>