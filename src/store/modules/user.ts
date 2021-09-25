import { Module } from 'vuex';
import { RootState } from '..';

export interface User {
  name: string;
}

const user: Module<User, RootState> = {
  state: {
    name: '',
  },
  getters: {

  },
  mutations: {},
  actions: {}
}

export default user;