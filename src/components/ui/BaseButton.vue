
<template>
  <button 
    class="rounded-[24px] w-full cursor-pointer"
    :class="classes"
  >
    <span>
      <slot  />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
  variant: 'outlined' | 'filled';
}>()

const classes = computed(()=> {
  return props.variant === 'outlined' 
  ? 'border border-solid border-pry text-pry' 
  : 'bg-pry text-white shadow-100'
})
</script>
