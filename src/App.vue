<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const scrollTop = ref(0);
const year = ref(new Date().getFullYear());

const updateScrollPosition = () => {
  scrollTop.value = window.scrollY;
};

let scrollListener: any;

onMounted(() => {
  scrollListener = () => updateScrollPosition();
  window.addEventListener('scroll', scrollListener);
  updateScrollPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener);
});

</script>

<template>
  <header class="text-gray-300 bg-gray-950 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed z-20" :class="scrollTop > 10 ?
      'backdrop-blur-sm bg-gray-950/80 border-b border-gray-800 border-solid' : 'backdrop-blur-sm border-gray-950/10'">
      <div class="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
        <span class="ml-3 text-xl"><router-link to="/" class="mr-5 hover:text-gray-500">Welcome</router-link></span>
      </div>
      <div class="md:ml-auto flex flex-wrap items-center text-base justify-center relative z-20">
        <router-link to="/case" class="mr-5 hover:text-purple-500">Web3 Case</router-link>
        <router-link to="/technology" class="mr-5 hover:text-purple-500">Technology</router-link>
        <router-link to="/about" class="mr-5 hover:text-purple-500">About Me</router-link>
        <router-link to="/contact" class="mr-5 hover:text-purple-500">Contact Us</router-link>
      </div>
    </div>
  </header>
  <router-view />
  <footer class="text-gray-400 bg-gray-950 body-font">
    <div class="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col">
      <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© {{ year
        }}
        All rights reserved。
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
            viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
            viewBox="0 0 24 24">
            <path
              d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
            </path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
            class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
            </path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>

<style>
@media screen and (max-width: 640px) {
  .title_ {
    margin-top: 30px;
  }
}
</style>
