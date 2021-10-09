/* eslint-disable */
// import { ComponentCustomProperties } from 'vue'
import 'vue-router';
// import { Store } from 'vuex'
import axios from 'axios';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios;
    // $store: Store<State>
  }
}
declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean;
    title?: string;
    keepAlive?: boolean;
    transition?: string;
  }
}
