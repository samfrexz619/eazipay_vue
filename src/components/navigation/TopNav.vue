<template>
  <header class="w-full">
    <nav class="lg:w-86 w-96 mx-auto h-[14vh] flex items-center justify-between">
      <router-link to="">
        <img src="@/assets/logo.svg" alt="">
      </router-link>
      <div class="hidden lg:flex gap-x-9">
        <router-link to="#" v-for="link in links" :key="link.id" class='text-textPry font-bold'>
          {{ link.name }}
        </router-link>
      </div>
      <div class="hidden lg:flex gap-x-7">
        <BaseButton variant='outlined' class='py-9px px-14'>
            <router-link to="/dashboard">
              Log in
            </router-link>
        </BaseButton>
        <BaseButton variant='filled' class='py-9px px-14'>
            <router-link to="/dashboard">
              Register
            </router-link>
        </BaseButton>
      </div>
      <button @click="handleShowNav" class="block lg:hidden text-2xl">
        <MenuIcon  />
      </button>
    </nav>
  </header>
  <div v-show="showMobile">
    <MobileNav @close="handleShowNav" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { links } from './links.ts'
import BaseButton from '../ui/BaseButton.vue'
import MenuIcon from '../ui/icons/MenuIcon.vue'
import MobileNav from './MobileNav.vue'

const showMobile = ref<boolean>(false)

const handleShowNav = ()=> {
  showMobile.value = !showMobile.value
}
</script>

<style scoped>

</style>