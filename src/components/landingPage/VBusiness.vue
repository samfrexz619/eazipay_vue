<template>
  <section class="business w-full py-16 lg:py-3">
    <div class="lg:w-86 w-96 mx-auto flex items-center justify-center min-h-[115vh] lg:h-[115vh] flex-col"> 
      <div class="">
        <h1 class="lg:text-[53px] text-[40px] font-bold text-pry leading-none">
          For Individuals and Businesses
        </h1>
        <p class="text-center pt-2">Join 200+ businesses using Eazipay's easy solution.</p>
      </div>
      <div class="py-10 lg:flex relative w-full">
        <div class='lg:relative lg:left-0'>
          <BaseCard title='Tamper-proof Payroll for LIfe'>
            <div>
              <p class="py-1">Your staff payroll history is kept in one place forever.</p>
              <p class="py-1">No more excel sheet or manual records.</p>
              <p class="py-1">Download your payroll history anytime you need it.</p>
            </div>
          </BaseCard>
        </div>
        <div class="lg:absolute lg:left-[25%] py-5 lg:py-0">
          <BaseCard title='All Payroll, Anytime Anywhere'>
            <div>
              <p class="py-1">Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</p>
              <p class="py-1">
              Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!
              </p>
            </div>
          </BaseCard>
        </div>
        <div class='lg:absolute lg:right-0'>
          <BaseCard title='Payroll in Seconds'>
            <div>
              <p class="py-1">Never again wil you spend more than 2 minutes on payroll.</p>
              <p class="py-1">Just click on your staff annd bulk-pay them at once.</p>
              <p class="py-1">Payment is done permanently.</p>
            </div>
          </BaseCard>
        </div>
      </div>
      <div>
        <p class="text-center text-[20px]">
        We are happy to answer your queries. Please, reach us at <br /> <a href="mailto:hello@myeazipay.com" class="text-eazi_red-10">hello@myeazipay.com</a> and expect our response shortly after.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue';

</script>

<style scoped lang="scss">
@font-face {
  font-family: mellow;
  src: url('@/assets/fonts/MADEMellowPERSONALUSE-Regular.otf');
  font-weight: normal;
}
@font-face {
  font-family: mellow;
  src: url('@/assets/fonts/MADEMellowPERSONALUSE-Medium.otf');
  font-weight: 500;
}

.business {
  background-image: url('@/assets/biz.png'), url('@/assets/eazi-wave.png');
  background-repeat: no-repeat, no-repeat;
  background-size: contain, cover;
  // transition: .45s cubic-bezier(.175,.585,.32,1.2075);
  h1 {
    font-family: mellow;
  }
}
</style>
