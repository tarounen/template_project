import Vue from 'vue'
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend('required',required);
extend("email", email);


Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);