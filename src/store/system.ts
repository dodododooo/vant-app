import { defineStore } from 'pinia';

const systemStore = defineStore('systemStore', {
  state: () => ({
    name: '',
  }),
  getters: {
    isLogined: () => true,
  },
});

export default systemStore;
