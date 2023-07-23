import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }, {
    path: '/all',
    name: 'All',
    component: () => import('../views/All.vue')
  }, {
    path: '/all/:id',
    name: 'Info',
    component: () => import('../views/Info.vue')
  }, {
    path: '/lipstick',
    name: 'Lipstick',
    component: () => import('../views/Lipstick.vue')
  }
  , {
    path: '/finger',
    name: 'Finger',
    component: () => import('../views/Finger.vue')
  }, {
    path: '/eyes',
    name: 'Eyes',
    component: () => import('../views/Eyes.vue')
  }, {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0)
  next();
})

export default router;
