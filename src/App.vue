<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive :include="aliveComponents">
        <component
          :is="Component"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@store';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    return {
      aliveComponents: store.state.keepAliveComponents
    }
  }
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
