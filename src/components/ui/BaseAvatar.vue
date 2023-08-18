<template>
  <div class="flex items-center gap-x-3">
   
    <div class="avatar">
      <img src="@/assets/ecl.png" alt="">
    </div>
    <div class="hidden md:block">
      <p class="capitalize font-bold leading-tight">{{ 'kalu abasiama' }}</p>
      <small class="text-[#898989]">Admin</small>
    </div>
    <small class="self-end pl-4">
      <svg width="24" height="25" viewBox="0 0 24 25">
        <use xlink:href="/sprite.svg#chev" />
      </svg>
    </small>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>