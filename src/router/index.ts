import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import useSystemStore from '@/store/system';

const files = import.meta.glob('../views/**/*.vue');

console.log(files);

const aliveComponents: string[] = [];
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home',
  },
];

// eslint-disable-next-line no-restricted-syntax
for (const path in files) {
  if (Object.prototype.hasOwnProperty.call(files, path)) {
    if (/component|module|util|use(?!r[/.])/i.test(path)) break; // 过滤组件, hooks(排除user路径)
    // eslint-disable-next-line no-await-in-loop
    const module = (await files[path]()).default;
    const { name } = module;
    if (!name) throw new Error('page module must have a name');
    const meta = { title: name, ...module.routeMeta };
    if (meta.keepAlive) aliveComponents.push(name);
    routes.push({
      path: `/${name}`,
      name,
      component: files[path],
      meta,
    });
  }
}

console.log(routes);

export const keepAliveComponents = aliveComponents.join(',');

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    let pos: any = null;
    if (to.hash) {
      pos = { el: to.hash };
    } else if (savedPosition) {
      pos = savedPosition;
    } else {
      pos = { top: 0 };
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pos);
      }, 300);
    });
  },
});

router.beforeEach((to) => {
  const systemStore = useSystemStore();
  if (to.meta.requiresAuth && !systemStore.isLogined) {
    document.title = '登录';
    return {
      path: '/Login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    };
  }
  document.title = <string>to.meta.title;
  return true;
});

export default router;
