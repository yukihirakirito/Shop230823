import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
import { faStar,faStarHalfStroke, faCartPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faStar,faStarHalfStroke,faCartPlus)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"