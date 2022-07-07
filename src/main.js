import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* add some free styles */
import { faTwitter, faLinkedin , faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun,} from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faMoon, faSun, faTwitter, faLinkedin, faFacebook)
// import css
import './assets/css/index.css';
// import themify icons
import './assets/css/themify-icons.css'

createApp(App)
    .use(router)
    .component('font-awesome-icon',FontAwesomeIcon)
    .mount('#app')
