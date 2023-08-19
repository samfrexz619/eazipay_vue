<template>
  <div class="w-86 mx-auto">
    <!-- <div class="h-[120px] card w-[150px] bg-pry text-white flex items-center justify-center my-10">
      <div>hello world</div>
    </div> -->

    <div class="my-10 flex relative">

      <div class="welcome bg-yellow-500 relative left-0 cd-1">
        <div>Welcome world 1</div>
      </div>
      <div class="welcome bg-green-300 absolute cd-2">
        <div>Welcome world 2</div>
      </div>
      <div class="welcome bg-pry relative right-0 cd-3">
        <div>Welcome world 3</div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
// import VWallet from '@/components/dashboard/VWallet.vue';


</script>

<style scoped lang="scss">
// .card {
//   transition: 2s, 1s ease-in-out;
//   animation-name: move;
//   animation-duration: 100s;
//   animation-fill-mode: both;
//   animation-delay: 2s;
//   &:hover {
//     background: skyblue;
//     transform: rotate(360deg);
//   }
// }
.welcome {
  width: 500px;
  min-height: 250px;
  border-radius: 24px;
  transition: 2s cubic-bezier(.175,.585,.32,1.2075);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 13px 37px hsla(0,0%,66.7%,.21);
  color: #fff;
  // &:hover {
    // transform: scaleX(3);
    // animation-name: welc;
    // animation-duration: 5s;
  // }
}
.cd-1 {
  padding-right: 80px;
}
.cd-2 {
  left: 25%;
  width: 50%;
}
.cd-3 {
  
}
.cd-1:hover~.cd-2 {
  left: 45%
}
.cd-2:hover {
  left: 10%
}
.cd-2:hover~.cd-3 {
  left: 5%
}
.cd-3:hover {
  left: -2%
}
</style>
<style>
/* @keyframes move {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(700px);
  }
}
@keyframes welc {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(400px);
  }
} */
</style>