import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCompositionAPI from '@vue/composition-api';
import { createPinia, PiniaVuePlugin } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faMagnifyingGlass,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;
Vue.prototype.$Event = new Vue();

Vue.use(VueCompositionAPI);

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

// awesome Icon
library.add(faBars, faMagnifyingGlass, faHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  pinia,
  render: (h) => h(App),
}).$mount('#app');
