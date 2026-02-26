import './assets/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/css/flaticon.css'
import './assets/css/odometer.min.css'
import './assets/css/meanmenu.css'
import './assets/css/magnific-popup.min.css'
import './assets/css/nice-select.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/fontawesome.min.css'
import './assets/css/style.css'
import './assets/css/dark.css'
import './assets/css/responsive.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
