/**
 * routes.js
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@/pages/home/Home'], resolve)
  },
  {
    path: '/category',
    name: 'Category',
    component: resolve => require(['@/pages/category/Category'], resolve)
  },
  {
    path: '/list',
    name: 'List',
    component: resolve => require(['@/pages/list/List'], resolve)
  },
  {
    path: '/detail',
    name: 'Detail',
    component: resolve => require(['@/pages/detail/Detail'], resolve)
  },
  {
    path: '/my',
    name: 'My',
    component: resolve => require(['@/pages/my/My'], resolve)
  },
  {
    path: '/cart',
    name: 'Cart',
    component: resolve => require(['@/pages/cart/Cart'], resolve)
  }
]

export default routes
