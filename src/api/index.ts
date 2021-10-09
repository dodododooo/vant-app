import axios from '@/plugins/axios';

export const getMenus = (params?: any) => axios.get('/api/admin/menus', { params });

export const test = (params?: any) => axios.get('/api/admin/menus', { params });
