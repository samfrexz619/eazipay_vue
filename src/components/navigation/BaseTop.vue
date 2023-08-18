<template>
  <div class="h-[13vh] bg-white w-full nav-shadow">
    <div class="h-full flex items-center">
      <div class="w-96 lg:w-86 mx-auto">
        <div class="flex h-full items-center justify-between">
          <div class="flex">
            <button @click="openNav" class="block lg:hidden">
              <MenuIcon  />
            </button>
            <img src="@/assets/coy.png" alt="" class="max-w-full md:block hidden">
          </div>
            <div class="flex md:w-[350px] gap-x-6 justify-between h-full items-center">
              <div class="relative">
                <svg width="16" height="20" viewBox="0 0 16 20">
                  <use xlink:href="/sprite.svg#notif" />
                </svg>
                <span class="w-[18px] h-[18px] rounded-full bg-[#C92F02] text-white absolute -top-2 flex items-center justify-center text-xs -right-3">
                {{ '7' }}
                </span>
              </div>
              <BaseAvatar  />
                        </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseAvatar from '../ui/BaseAvatar.vue';
import MenuIcon from '../ui/icons/MenuIcon.vue';

const emits = defineEmits(['open'])

const openNav =()=> {
  emits('open')
}
</script>

<style scoped lang="scss">
.nav-shadow {
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);
}
</style>