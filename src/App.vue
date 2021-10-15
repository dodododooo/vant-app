<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive :include="keepAliveComponents">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
// import { defineComponent } from 'vue';
import { keepAliveComponents } from '@/router';

// export default defineComponent({
//   name: 'App',
//   setup() {
//     return {
//       keepAliveComponents
//     }
//   }
// });
</script>

<style>
.a{
  display:inline;
  height:20px;
  width:3px;
}
</style>
