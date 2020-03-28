import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase/app'
import paths from "./paths";
import NProgress from "nprogress";
import "nprogress/nprogress.css";


Vue.use(Router);
const router = new Router({
  base: "/",
  mode: "history",
  routes: paths
});

// router gards
router.beforeEach((to, from, next) => {
  NProgress.start();

  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser){
    next('/login');
  }
  else if (!requiresAuth && currentUser){
    next('/');
  }
  else{
    next();
  } 
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

