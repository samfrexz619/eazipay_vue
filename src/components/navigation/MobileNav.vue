<template>
  <aside @click.self="openNav" class="fixed inset-y-0 w-full flex lg:hidden bg-bgg justify-end">
    <nav class="bg-white relative w-[300px]">
      <div class="px-3 py-7">
        <div class='flex justify-between'>
          <img src='@/assets/logo.svg' alt="company's logo" />
          <button @click="openNav" class='cursor-pointer'>
            <CloseIcon  />
          </button>
        </div>
        <div class="my-10">
          <router-link to="#" v-for="link in links" :key="link.id" class='text-textPry block py-5 font-bold'>
            {{ link.name }}
          </router-link>
        </div>
        <div className='mt-10'>
          <BaseButton variant='filled' class='py-3'>
            Register
          </BaseButton>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import CloseIcon from '../ui/icons/CloseIcon.vue'
import {links } from './links'
import BaseButton from '../ui/BaseButton.vue'

const emit = defineEmits(['close'])

const openNav =()=> {
  emit('close')
}

</script>

<style scoped>

</style>