import { defineStore } from 'pinia';

const userStore = defineStore('userStore', {
  state: () => ({
    name: '',
  }),
});

export default userStore;
