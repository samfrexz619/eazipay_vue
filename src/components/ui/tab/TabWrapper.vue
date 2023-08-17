<template>
  <div class="tab w-full">
    <div class="tab__title w-full flex justify-between gap-x-3 items-center">
      <button
        v-for="(title, index) in tabTitles"
        :key="index"
        :class="{selected: title === selectedIndex}"
        @click="selectedIndex = title"
      >
        {{ title }}
      </button>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots, provide } from 'vue';

interface Tabs {
  title: string[];
}

const slots = useSlots()


const tabTitles = ref<Tabs[]>(slots.default!().map(tab => tab.props!.title))

const selectedIndex = ref(tabTitles.value[0])

provide('selectedIndex', selectedIndex)

</script>

<style scoped lang="scss">
.tab {
  &__title {
    border-radius: 16px;
    border: 1px solid #E7E8E7;
    background: #FFF;
    padding: 8px;
  }
  button {
    outline: none;
    border: none;
    background: inherit;
    padding: 10px;
    cursor: pointer;
    background: #F2F1F1;
    border-radius: 12px;
    font-size: 16px;
    color: #515251;
    width: 50%;
    // margin-bottom: 1rem;
  }
  .selected {
    box-shadow: 0px 8.871848106384277px 40.5570182800293px -2.534813642501831px rgba(24, 39, 75, 0.12), 0px 5.069627285003662px 13.941474914550781px -3.802220582962036px rgba(24, 39, 75, 0.12);
    background: #11453B;
    color: #fff;
  }
}
</style>