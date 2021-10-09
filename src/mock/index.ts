import Mock from 'mockjs';

Mock.mock(/\/api\/admin\/menus/, 'get', [
  { a: 4 },
]);
