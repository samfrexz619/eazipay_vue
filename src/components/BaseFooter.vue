<template>
  <footer class="w-full py-10">
    <div class="w-96 lg:w-86 mx-auto lg:h-[320px]">
      <div class="flex flex-col-reverse w-full lg:grid grid-cols-6 gap-x-2 h-full pt-14">
        <div class="flex flex-col lg:block items-center lg:col-span-2 w-full">
          <router-link to="/" class="block pb-5">
            <img src="@/assets/logo.svg" alt="mx-auto">
          </router-link>
          <p class="text-grey_10 py-2 text-center lg:text-start">
            Copyright &copy; 2023 Eaxipay. <br>
            All rights reserved
          </p>
          <div class="flex gap-x-3 lg:pt-14 pt-5">
            <router-link to="#" v-for="(social, index) in socials" :key="index">
              <SocialIcons :name="social" />
            </router-link>
          </div>
        </div>
        <div class="grid grid-cols-3 lg:col-span-3 py-10 lg:py-0">
          <div>
            <h3>Products</h3>
            <div class="pt-5">
              <router-link
                to="#"
                v-for="link in links"
                :key="link.id"
                class="block py-2 text-grey_10"
              >
                {{ link.name }}
              </router-link>
            </div>
          </div>
          <div>
            <h3>Legal</h3>
            <div class="text-grey_10 pt-5">
              <router-link to="#" class="block py-2">Privacy Policy</router-link>
              <router-link to="#" class="block py-2">Terms of Service</router-link>
            </div>
          </div>
          <div>
            <h3>Resources</h3>
            <div class="pt-5">
              <router-link
                to="#"
                v-for="link in resources"
                :key="link.id"
                class="block py-2 text-grey_10"
              >
                {{ link.name }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:block items-center">
          <div class="text-grey_10 text-center lg:text-start">
            <h3>Contact us</h3>
            <a href="mailto:eazipay@gmail.com" class="block pt-5">eazipay@gmail.com</a>
            <a href="tel:+2348168789518" class="block py-4">+2348168789518</a>
          </div>
          <div class="input mt-3">
            <input type="text" placeholder="Your email address">
            <button>
              <SendIcon  />
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { links, resources } from './navigation/links';
import SendIcon from './ui/icons/SendIcon.vue'
import SocialIcons from './ui/SocialIcons.vue'

const socials = ref(['instagram', 'twitter', 'linkedIn', 'facebook'])
</script>

<style scoped lang="scss">
footer {
  border-top: 1px solid #eaeaea;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #292A29;
  }
  .input {
    display: flex;
    background: #F2F1F1;
    border-radius: 16px;
    padding: 13px 26px;
    font-size: 14px;
    width: 90%;
    align-items: center;
    @media(min-width: 1024px){
      width: auto;
    }
    input {
      outline: none;
      border: none;
      background: inherit;
      width: 100%;
    }
  }
}

</style>