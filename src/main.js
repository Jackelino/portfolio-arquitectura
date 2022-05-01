import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* add some free styles */
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faMoon, faSun)
// import css
import './assets/css/index.css';

createApp(App)
    .use(router)
    .component('font-awesome-icon',FontAwesomeIcon)
    .mount('#app')
