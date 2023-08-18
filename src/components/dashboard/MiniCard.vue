<template>
  <div class="card w-full">
    <div class="flex flex-col w-full items-center justify-center h-[20vh]">
      <div :class="['card__icon', iconBg]">
        <CardIcons :name="name" />
      </div>
      <p class="capitalize text-[14px] py-3">{{ name }} </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CardIcons from './CardIcons.vue';


const props = defineProps<{
  name: string;
}>()

const iconBg = computed(()=> {
  return props.name === 'add employee'
  ? 'bg-[#FFEDEC] text-eazi_red-10'
  : props.name === 'pay salaries'
  ? 'bg-[#F0F7EB]'
  : props.name === 'pay compliance'
  ? 'bg-[#E0F8EA] text-[#219653]'
  : 'bg-[#EDF5FF] text-[#2F80ED]'
})

</script>

<style scoped lang="scss">
.card {
  box-shadow: 0px 9px 18px 0px rgba(170, 170, 170, 0.15);
  border-radius: 24px;
  background: #fff;
  border: 1px solid #E7E8E7;

  &__icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>