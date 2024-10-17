import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
pinia.use(({
  store, options, app,
}) => {
  console.log(store);
  console.log(options);
});

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app');
