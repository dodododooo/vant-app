import { defineStore } from "pinia";

export const useSystemStore = defineStore('systemStore', {
  state: () => {
    return {
      name: '',
    }
  },
  getters: {
    isLogined: () => true
  }
})