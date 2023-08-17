<template>
  <main>
    <div>
      <BaseBanner  />
    </div>
    <div>
      <VBusiness  />
    </div>
    <div>
      <VSubscribe  />
    </div>
    <div>
      <VExclusive  />
    </div>
  </main>
</template>

<script setup lang="ts">
import BaseBanner from '@/components/landingPage/BaseBanner.vue'
import VBusiness from '@/components/landingPage/VBusiness.vue'
import VExclusive from '@/components/landingPage/VExclusive.vue';
import VSubscribe from '@/components/landingPage/VSubscribe.vue';
</script>

<style scoped>

</style>