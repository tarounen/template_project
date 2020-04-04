import Vue from 'vue'
import { ValidationProvider, extend, ValidationObserver } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";


extend('required',required);
extend("email", email);

extend('min', {
  params: ['length'],
  validate(value, args) {
    return value.length >= args.length;
  },
  message: "{_field_} should be of at leat {length} characters"
});

extend('match', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: ' {_field_} does not match'
});


Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);