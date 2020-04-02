import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from './firebase/firebase'
import { store } from './store/store'

import 'vuetify/dist/vuetify.min.css'
import './styles/style.css'
import './functions/functions'
import './rules/rules'

import VueSession from 'vue-session'
Vue.use(VueSession);

import VuetifyConfirm from 'vuetify-confirm'
Vue.use(VuetifyConfirm, {vuetify});


Vue.config.productionTip = false;
Vue.config.devtools = false;

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;
Vue.prototype.$firestore = firebase.firestore();
Vue.prototype.$auth = firebase.auth();

let app; 

firebase.auth().onAuthStateChanged(function(user){
	if (!app){
		/* eslint-disable no-new */
		app = new Vue({
			el: '#app',
			router,
			store,
			vuetify,
			components: { App },
			render: h => h(App),
			template: '<App/>',
		});
	}
});
