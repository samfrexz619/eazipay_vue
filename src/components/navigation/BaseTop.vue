<template>
  <div class="h-[13vh] bg-white w-full shadow-20">
    <div class="h-full flex items-center">
      <div class="w-96 mx-auto">
        <button @click="openNav" class="block lg:hidden">
          <MenuIcon  />
        </button>
     hello
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuIcon from '../ui/icons/MenuIcon.vue';

const emits = defineEmits(['open'])

const openNav =()=> {
  emits('open')
}
</script>

<style scoped lang="scss">
// .top {
//   width: calc(100% - 272px);
//   position: fixed;
//   top: 0;
//   background: #fff;
//   left: 272px;
//   height: 15vh;
// }
</style>