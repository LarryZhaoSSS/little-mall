import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index',
    component: () => import('@/views/Home'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/views/product')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/detail')
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order'),
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: () => import('@/views/orderList')
      },
      {
        path: 'pay',
        name: 'order-pay',
        component: () => import('@/views/orderPay')
      },
      {
        path: 'comfirm',
        name: 'order-confirm',
        component: () => import('@/views/orderConfirm')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart')
  }
];

const router = new VueRouter({
  routes
});

export default router;
