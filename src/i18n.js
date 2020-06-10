import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { configure } from 'vee-validate';

import enLocale from 'vee-validate/dist/locale/en'
import brLocale from '../src/locales/pt_BR'

Vue.use(VueI18n)

const messages = {
  en: {
    validations: enLocale.messages
  },
  pt_BR: {
    fields: brLocale.fields,
    validations: brLocale.messages
  }
}

const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages
})

configure({
  // this will be used to generate messages.
  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`);
    return i18n.t(`validations.${values._rule_}`, values);
  }
})

export default i18n
