import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './utils/vuetify'
import "./style.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


library.add(fas) // Include needed solid icons
library.add(far) // Include needed regular icons

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')