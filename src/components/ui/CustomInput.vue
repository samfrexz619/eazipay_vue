<template>
  <div class="custom">
    <div class="w-full flex items-center h-full">
      <input 
        :type="type" 
        @input="getValue" 
        :value="modelValue" 
        required
      >
      <span>{{ placeholder }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  placeholder: string;
  type: string;
  modelValue: string;
}>()

const emit = defineEmits(['update:modelValue'])

const getValue =(e: Event)=> {
  let val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val)
}

</script>

<style scoped lang="scss">
.custom {
  position: relative;
  width: 100%;
  margin-top: 25px;
  border: 1px solid #B5B6B5;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px;
  input {
    width: 100%;
    position: relative;
    background: transparent;
    outline: none;
    height: 100%;
    color: #959DA1;
    font-size: 1em;
    letter-spacing: 0.05em;
    z-index: 10;
    &:valid ~ span, 
    &:focus ~ span {
      color: #B5B6B5;
      transform: translateX(-10px) translateY(-24px);
      font-size: 0.75em;
      background: #fff;
      margin-left: 30px;
      padding: 5px;
      
    }
  }
  span {
    position: absolute;
    left: 0;
    padding: 0 8px 0 13px;
    font-size: 1em;
    color: #959DA1;
    pointer-events: none;
    letter-spacing: 0.05em;
    transition: 0.5s;
  }
}
</style>