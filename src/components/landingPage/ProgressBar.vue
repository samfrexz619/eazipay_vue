<template>
  <div class="w-full">
    <div class="relative">
       <div class="relative">
          <div class="num current absolute left-12 -top-7">
            <h1 class="font-bold text-[38px]">1</h1>
          </div>
          <div class="absolute top-12 left-12">
            <h3 class="text-pry text-[20px] font-bold">Create your free account</h3>
            <p class="text-textPry py-2">Click here to set up your Eazipay account.</p>
          </div>
          <span>
            <svg width="50" height="222" viewBox="0 0 50 222">
              <use xlink:href="/sprite.svg#step1" />
            </svg>
          </span>
       </div>
       <div class="relative">
        <div class="relative">
          <div class="num absolute -top-11 left-16">
            <h1 class="font-bold text-[38px]">2</h1>
          </div>
          <div class="absolute top-10 left-12">
            <h3 class="text-pry text-[20px] font-bold">Add Employee Data</h3>
            <p class="text-textPry py-2">
              Your employee information is 100% safe and <br> secure.
            </p>
          </div>
        </div>
        <span class="absolute left-[8.1rem] -top-3">
          <svg width="302" height="245" viewBox="0 0 302 245">
            <use xlink:href="/sprite.svg#step2" />
          </svg>
        </span>
        <div class="num absolute top-[190px] left-12">
          <h1 class="font-bold text-[38px]">3</h1>
        </div>
       <div class="absolute top-[278px] left-12">
          <h3 class="text-pry text-[20px] font-bold">Prepare your Transaction</h3>
          <p class="text-textPry py-2">
            Run payroll: Bulk Salaries and Compliance are <br> done at once!
          </p>
       </div>
       </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.num {
  display: flex;
  width: 64px;
  height: 64px;
  padding: 16px 33px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 10px;
  border-radius: 16px;
  background: #F2F1F1;
  box-shadow: 0px 20px 48px 0px rgba(170, 170, 170, 0.29);
  h1 {
    color: #11453B;
  }
}
.current {
  background: #11453B;
  h1 {
    color: #F2F1F1;
  }
}
</style>