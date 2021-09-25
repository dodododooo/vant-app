import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import user, { User } from './modules/user'
export interface RootState {
  keepAliveComponents: string;
}

interface AllState extends RootState {
  user: User;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state: {
    keepAliveComponents: '',
  },
  modules: {
    user
  }
})

export function useStore<T = AllState>() {
  return baseUseStore<T>(key)
}
