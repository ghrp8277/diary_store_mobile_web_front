import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './services/fontAwesome';
import { globalCookiesConfig } from 'vue3-cookies';

globalCookiesConfig({
  expireTimes: '30d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None',
});

Vue.config.productionTip = false;
Vue.prototype.$Event = new Vue();

Vue.use(VueCompositionAPI);

Vue.use(PiniaVuePlugin);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
