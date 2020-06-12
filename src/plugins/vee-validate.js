import Vue from 'vue'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate'
import {
  email,
  max,
  min,
  required,
  confirmed,
} from 'vee-validate/dist/rules'

extend('email', email)
extend('max', max)
extend('min', min)
extend('required', required)
extend('confirmed', confirmed)

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
