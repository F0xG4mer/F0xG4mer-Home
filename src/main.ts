import './assets/styles/main.css'
import './assets/styles/images.css'
import './assets/styles/_variables.css'
import './assets/styles/button.css'
import './assets/styles/navbar.css'
import './assets/styles/containers.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faHome, faCubes, faArchive, faEnvelope, faArrowDown} from '@fortawesome/free-solid-svg-icons'


library.add(faHome, faCubes, faArchive, faEnvelope, faArrowDown)


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
