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
 
router.beforeEach((to, from, next) => {
	NProgress.start();

	let currentUser = firebase.auth().currentUser;
	let admin = false;
	if (router.app.$session.get("isAdmin")){
		admin = true;
	}

	let publicPage = to.matched.some(record => record.meta.public);
	let requiresNotSigned = to.matched.some(record => record.meta.requiresNotSigned);
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	let requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

	if (publicPage && !requiresNotSigned){
		next();
	}
	else if (requiresAuth && !currentUser){
		next({path: '/login'});
	}
	else if ( (requiresNotSigned && currentUser) || (requiresAdmin && !admin) ){
		next({path: '/user'});
	}
	else if (admin && !requiresAdmin){
		next({path: '/admin'});
	}
	else{
		next();
	}
});

router.afterEach(() => {
	NProgress.done();
});

export default router;

