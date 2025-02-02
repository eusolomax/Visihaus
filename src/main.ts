import { createApp } from 'vue'
import router from './router'
import Base from './views/Base.vue'

createApp(Base)
  .use(router)
  .mount('#app')