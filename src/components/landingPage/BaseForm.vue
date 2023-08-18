<template>
  <div class="lg:w-full w-[500px] rounded-[32px] shadow-300 bg-white py-10 border border-solid border-[#E7E8E7]">
    <div class="w-[85%] mx-auto">
      <div class="text-center">
        <h3 class="text-[28px] font-bold text-[#292A29]">First things first</h3>
        <p class="py-4 text-[18px]">
          We want to serve you better. Tell us a bit <br class="hidden md:block"> about yourself or company
        </p>
      </div>
      <TabWrapper class="py-8">
        <BaseTab title="Individual">
          <form class="pt-5">
            <div>
              <CustomInput
                v-model:model-value="customerData.fName"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.lName"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.job"
                placeholder="Job Title"
                type="text"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.size"
                placeholder="Company Size"
                type="text"
              />
            </div>
            <div class="mt-10">
              <BaseButton variant="filled" class="py-3">
                Request Demo
              </BaseButton>
            </div>
          </form>
        </BaseTab>
        <BaseTab title="Company">
          <form class="pt-5">
            <div>
              <CustomInput
                v-model:model-value="customerData.fName"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.lName"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.job"
                placeholder="Job Title"
                type="text"
              />
            </div>
            <div>
              <CustomInput
                v-model:model-value="customerData.size"
                placeholder="Company Size"
                type="text"
              />
            </div>
            <div class="mt-10">
              <BaseButton variant="filled" class="py-3">
                Request Demo
              </BaseButton>
            </div>
          </form>
        </BaseTab>
      </TabWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from '../ui/CustomInput.vue';
import BaseButton from '../ui/BaseButton.vue';
import TabWrapper from '../ui/tab/TabWrapper.vue'
import BaseTab from '../ui/tab/BaseTab.vue'

interface CustomerData {
  fName: string;
  lName: string;
  email: string;
  job: string;
  size:string;
}
const customerData = ref<CustomerData>({
  fName: '',
  lName: '',
  email: '',
  job: '',
  size: ''
})
</script>

<style scoped lang="scss">
@font-face {
  font-family: aeonik;
  src: url('@/assets/fonts/AeonikTRIAL-Bold.otf');
  font-weight: bold;
}
h3 {
  font-family: aeonik;
}
</style>